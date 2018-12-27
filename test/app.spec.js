const { describe, it } = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const mjml = require('mjml')
const app = require('../src/app')

chai.use(chaiHttp)

const { expect } = chai

const template = `
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-divider border-color="#F45E43"></mj-divider>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`

const { html: rendered } = mjml(template, {
  minify: false,
  keepComments: false
})

const expectSuccess = (response, { errors = [], html, template }) => {
  expect(response).to.have.status(200)
  expect(response.body).to.have.property('errors')
    .which.eql(errors)
  expect(response.body).to.have.property('html')
    .which.equals(html)
  expect(response.body).to.have.property('mjml')
    .which.equals(template)
  expect(response.body).to.have.property('mjml_version')
}

describe('MJML server', () => {
  it('renders template', async () => {
    const response = await chai.request(app)
      .post('/v1/render')
      .send({ mjml: template })

    expectSuccess(response, {
      html: rendered,
      template
    })
  })

  describe('validation', () => {
    it('validates request', async () => {
      const response = await chai.request(app)
        .post('/v1/render')
        .send({})

      expect(response).to.have.status(400)
      expect(response.body).to.have.property('message')
      expect(response.body).to.have.property('request_id')
      expect(response.body).to.have.property('started_at')
    })

    it('validates invalid syntax', async () => {
      const template = `<mj-image width="100" src="/assets/img/logo-small.png"></mj-image>`
      const output = mjml(
        template,
        { validationLevel: 'soft' }
      )

      const response = await chai.request(app)
        .post('/v1/render')
        .send({ mjml: template })

      expectSuccess(response, {
        ...output,
        template
      })
    })
  })
})
