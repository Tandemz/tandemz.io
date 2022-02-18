---
template: pricing
title: Pricing
description: ''
keywords: pricing, Tandemz, recruit testers, recruit participants
menus:
  main:
    title: Pricing
    weight: 2
  secondary:
    title: Pricing
    weight: 3
sections:
- template: tabpanelblock
  component: TabPanelBlock
  section_id: PriceSection
  tabs:
  - tablabel: Remote Participants
    childrenpanel:
    - template: offersection
      component: OffersectionsBlock
      element_id: TargetingOptions
      Sections:
      - title: Target Consumers
        offerSections:
        - template: pricingcolumn
          color: Blue
          title: Broad targeting
          price: "40"
          offerdesctription: For studies that can gather insight from most people
          offerdetails:
          - icon: Present
            offerDetailLabel: 20€ incentive included for a 30 min of meeting
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: 5 demographic criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: Age
            - offerDetailSubItemLabel: Gender
            - offerDetailSubItemLabel: Country of residence
            - offerDetailSubItemLabel: Language (native speakers or EN only)
            - offerDetailSubItemLabel: Devices owned
          - icon: Lock
            offerDetailLabel: Up to 3 screener questions
            offerDetailSubItems: []
          id: broadTargeting
          offerdescription: For studies that can gather insight from most people
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
        - template: pricingcolumn
          color: Green
          title: Precise Targeting
          price: "60"
          offerdesctription: Target the right people with full demographic details
          offerdetails:
          - icon: Present
            offerDetailLabel: 20€ incentive included, based on a 30 min of meeting
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: All demographic criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: BROAD targeting +
            - offerDetailSubItemLabel: City of residence
            - offerDetailSubItemLabel: Family situation
            - offerDetailSubItemLabel: Professional situation
            - offerDetailSubItemLabel: Education level
            - offerDetailSubItemLabel: Income level
            - offerDetailSubItemLabel: Tech savvyness
          - icon: Tick
            offerDetailLabel: Unlimited screener questions
            offerDetailSubItems: []
          offerdescription: Target the right people with full demographic details
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
      - title: Target Professionals
        offerSections:
        - template: pricingcolumn
          color: Purple
          title: Employees
          price: "100"
          offerdesctription: For studies that want to gather insights on how certain
            employees work
          offerdetails:
          - icon: Present
            offerDetailLabel: 30€ incentive included, based on a 30 min of meeting
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: Basic professional criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: BROAD targeting +
            - offerDetailSubItemLabel: Tech Savviness
            - offerDetailSubItemLabel: Education level
            - offerDetailSubItemLabel: Professional situation
            - offerDetailSubItemLabel: Industry
            - offerDetailSubItemLabel: Company size
            - offerDetailSubItemLabel: Company type
          - icon: Tick
            offerDetailLabel: Unlimited screener questions
            offerDetailSubItems: []
          id: ''
          offerdescription: Target the right people with full demographic details
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
        - template: pricingcolumn
          color: Black
          title: Managers
          price: "140"
          offerdesctription: For studies that want to gather insights from decision
            makers
          offerdetails:
          - icon: Present
            offerDetailLabel: 40€ incentive included, based on a 30 min of meeting
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: All professional criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: EMPLOYEES targeting +
            - offerDetailSubItemLabel: Hierarchical Level
            - offerDetailSubItemLabel: Job Title
          - icon: Tick
            offerDetailLabel: Unlimited screener questions
            offerDetailSubItems: []
          id: ''
          offerdescription: For studies that want to gather insights from decision
            makers
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
  - tablabel: In person participants
    childrenpanel:
    - template: offersection
      component: OffersectionsBlock
      element_id: TargetingOptions
      Sections:
      - title: Target consumers
        offerSections:
        - template: pricingcolumn
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
          color: Blue
          title: BROAD TARGETING
          price: "50"
          offerdescription: For studies that can gather insight from most people
          offerdetails:
          - icon: Present
            offerDetailLabel: 30€ incentive included for a 30 min of meeting
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: 5 demographic criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: Age
            - offerDetailSubItemLabel: Gender
            - offerDetailSubItemLabel: Country of residence
            - offerDetailSubItemLabel: Language (native speakers or EN only)
            - offerDetailSubItemLabel: Devices owned
          - icon: Lock
            offerDetailLabel: Up to 3 screener questions
            offerDetailSubItems: []
        - template: pricingcolumn
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
          color: Green
          title: PRECISE TARGETING
          price: "70"
          offerdescription: For studies that can gather insight from most people
          offerdetails:
          - icon: Present
            offerDetailLabel: 30€ incentive included for a 30 min of meeting
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: All demographic criteria available
            offerDetailSubItems:
            - offerDetailSubItemLabel: BROAD targeting +
            - offerDetailSubItemLabel: City of residence
            - offerDetailSubItemLabel: Family situation
            - offerDetailSubItemLabel: Professional situation
            - offerDetailSubItemLabel: Education level
            - offerDetailSubItemLabel: Income level
            - offerDetailSubItemLabel: Tech savvyness
          - icon: Tick
            offerDetailLabel: Unlimited screener questions
            offerDetailSubItems: []
  title: Transparent prices for every target and every study
- template: ctablock
  component: CtaBlock
  type: ctablock
  bg: blue
  title: Unsure of what recruiting options to choose? Let's talk about it!
  actions:
  - label: Talk to an expert
    url: https://go.oncehub.com/MarineWolffhugel
    title: Talk to an expert
    button_priority: ''
  section_id: ''
  subtitle: ''
ogtitle: Accessible testers recruitment with Tandemz
ogdescription: Accessible testers recruitment with Tandemz
ogtype: ''
ogimage: ''
ogimagealt: ''
og_image_width: 
og_image_height: 
twitter_card: ''
metatags: []
schema_org_data_list: []

---
