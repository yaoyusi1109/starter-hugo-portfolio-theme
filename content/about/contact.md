---
# An instance of the Contact widget.
# Documentation: https://wowchemy.com/docs/getting-started/page-builder/
widget: contact
active: true
# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 50

title: Get in touch
subtitle: Feel free to reach out for collaborations or just a friendly hello

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
      # Enable form validation?
      validation: true

  # Contact details
  contact_links:
    - icon: envelope
      icon_pack: fas
      name: yao.yusi@outlook.com
      link: mailto:yao.yusi@outlook.com

design:
  columns: '1'
---
