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
  minify: true,
  keepComments: false
})

describe('MJML server', () => {
  it('renders template', async () => {
    const response = await chai.request(app)
      .post('/v1/render')
      .send({ mjml: template })

    expect(response).to.have.status(200)
    expect(response.text).to.equal(rendered)
  })

  it('renders template | json output', async () => {
    const response = await chai.request(app)
      .post('/v1/render')
      .set('Accept', 'application/json')
      .send({ mjml: template })

    expect(response).to.have.status(200)
    expect(response.body).to.have.property('html')
      .which.equals(rendered)
  })
})
