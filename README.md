# mjml-api [![Build Status](https://travis-ci.org/baethon/mjml-api.svg?branch=master)](https://travis-ci.org/baethon/mjml-api)[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project exposes [mjml](https://mjml.io) as an API service. It's meant* to be compatible with [MJML API ](https://mjml.io/api).

## Requirements

* Node >= 8
* Yarn

## Running

### From sources

```bash
yarn
yarn start
```

### Using heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/baethon/mjml-api/tree/master)

### Using Docker image

```bash
docker run --rm -p 3000:8080 baethon/mjml-api
```

## Supported env variables

|  Name | Alias | Default | Description |
| ------ | ------ | ------- | ----------- |
| `NODE_PORT` | `PORT` | `3000` | Port to listen on |
| `NODE_HOST` | `HOST` |  `0.0.0.0` | Host to listen on |n



## API

This API aims to be combatible with MJML API.

Yet, there're few differences:

* **there's no client authorization** - make sure that API won't be publicly available
* `request_id` in errors will always be `NULL`
* `started_at` will return date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

### Endpoints

#### POST /v1/render

Renders given MJML template.

##### Example request

```json
{ 
    "mjml": "<mjml>  <mj-body>    <mj-section>      <mj-column>        <mj-divider border-color=\"#F45E43\"></mj-divider>        <mj-text font-size=\"20px\" color=\"#F45E43\" font-family=\"helvetica\">Hello World</mj-text>      </mj-column>    </mj-section>  </mj-body></mjml>" 
}
```

##### Example response

```json
{
    "html": "\n    <!doctype html>\n    <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n      <head>\n        <title>\n          \n        </title>\n        <!--[if !mso]><!-- -->\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <!--<![endif]-->\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <style type=\"text/css\">\n          #outlook a { padding:0; }\n          .ReadMsgBody { width:100%; }\n          .ExternalClass { width:100%; }\n          .ExternalClass * { line-height:100%; }\n          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n          p { display:block;margin:13px 0; }\n        </style>\n        <!--[if !mso]><!-->\n        <style type=\"text/css\">\n          @media only screen and (max-width:480px) {\n            @-ms-viewport { width:320px; }\n            @viewport { width:320px; }\n          }\n        </style>\n        <!--<![endif]-->\n        <!--[if mso]>\n        <xml>\n        <o:OfficeDocumentSettings>\n          <o:AllowPNG/>\n          <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]-->\n        <!--[if lte mso 11]>\n        <style type=\"text/css\">\n          .outlook-group-fix { width:100% !important; }\n        </style>\n        <![endif]-->\n        \n        \n    <style type=\"text/css\">\n      @media only screen and (min-width:480px) {\n        .mj-column-per-100 { width:100% !important; max-width: 100%; }\n      }\n    </style>\n    \n  \n        <style type=\"text/css\">\n        \n        \n        </style>\n        \n        \n      </head>\n      <body>\n        \n        \n      <div\n         style=\"\"\n      >\n        \n      \n      <!--[if mso | IE]>\n      <table\n         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"\n      >\n        <tr>\n          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n      <![endif]-->\n    \n      \n      <div  style=\"Margin:0px auto;max-width:600px;\">\n        \n        <table\n           align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:100%;\"\n        >\n          <tbody>\n            <tr>\n              <td\n                 style=\"direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;\"\n              >\n                <!--[if mso | IE]>\n                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                \n        <tr>\n      \n            <td\n               class=\"\" style=\"vertical-align:top;width:600px;\"\n            >\n          <![endif]-->\n            \n      <div\n         class=\"mj-column-per-100 outlook-group-fix\" style=\"font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\"\n      >\n        \n      <table\n         border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"vertical-align:top;\" width=\"100%\"\n      >\n        \n            <tr>\n              <td\n                 style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"\n              >\n                \n      <p\n         style=\"border-top:solid 4px #F45E43;font-size:1;margin:0px auto;width:100%;\"\n      >\n      </p>\n      \n      <!--[if mso | IE]>\n        <table\n           align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-top:solid 4px #F45E43;font-size:1;margin:0px auto;width:550px;\" role=\"presentation\" width=\"550px\"\n        >\n          <tr>\n            <td style=\"height:0;line-height:0;\">\n              &nbsp;\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    \n    \n              </td>\n            </tr>\n          \n            <tr>\n              <td\n                 align=\"left\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\"\n              >\n                \n      <div\n         style=\"font-family:helvetica;font-size:20px;line-height:1;text-align:left;color:#F45E43;\"\n      >\n        Hello World\n      </div>\n    \n              </td>\n            </tr>\n          \n      </table>\n    \n      </div>\n    \n          <!--[if mso | IE]>\n            </td>\n          \n        </tr>\n      \n                  </table>\n                <![endif]-->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        \n      </div>\n    \n      \n      <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n      <![endif]-->\n    \n    \n      </div>\n    \n      </body>\n    </html>\n  ",
    "errors": [],
    "mjml": "<mjml>  <mj-body>    <mj-section>      <mj-column>        <mj-divider border-color=\"#F45E43\"></mj-divider>        <mj-text font-size=\"20px\" color=\"#F45E43\" font-family=\"helvetica\">Hello World</mj-text>      </mj-column>    </mj-section>  </mj-body></mjml>",
    "mjml_version": "4.2.1"
}
```

##### Example errors

```json
{
    "request_id": null,
    "started_at": "2018-12-27T14:01:30.732Z",
    "message": "Invalid value [body > mjml]"
}
```

```json
{
    "html": "\n    <!doctype html>\n    <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n      <head>\n        <title>\n          \n        </title>\n        <!--[if !mso]><!-- -->\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <!--<![endif]-->\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <style type=\"text/css\">\n          #outlook a { padding:0; }\n          .ReadMsgBody { width:100%; }\n          .ExternalClass { width:100%; }\n          .ExternalClass * { line-height:100%; }\n          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n          p { display:block;margin:13px 0; }\n        </style>\n        <!--[if !mso]><!-->\n        <style type=\"text/css\">\n          @media only screen and (max-width:480px) {\n            @-ms-viewport { width:320px; }\n            @viewport { width:320px; }\n          }\n        </style>\n        <!--<![endif]-->\n        <!--[if mso]>\n        <xml>\n        <o:OfficeDocumentSettings>\n          <o:AllowPNG/>\n          <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]-->\n        <!--[if lte mso 11]>\n        <style type=\"text/css\">\n          .outlook-group-fix { width:100% !important; }\n        </style>\n        <![endif]-->\n        \n        \n        <style type=\"text/css\">\n        \n        \n        </style>\n        \n        \n      </head>\n      <body>\n        \n        \n      </body>\n    </html>\n  ",
    "errors": [
        {
            "line": 1,
            "message": "Attribute width has invalid value: 100 for type Unit, only accepts (px) units and 1 value(s)",
            "tagName": "mj-image",
            "formattedMessage": "Line 1 of /home/radmen/Work/open-source/baethon/mjml-api (mj-image) — Attribute width has invalid value: 100 for type Unit, only accepts (px) units and 1 value(s)"
        }
    ],
    "mjml": "<mj-image width=\"100\" src=\"/assets/img/logo-small.png\"></mj-image>",
    "mjml_version": "4.2.1"
}
```

## Testing

```bash
yarn test
```
