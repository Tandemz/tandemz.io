---
template: pricing
title: Prix
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
  - tablabel: Participants en visioconférence
    childrenpanel:
    - template: offersection
      component: OffersectionsBlock
      element_id: TargetingOptions
      Sections:
      - title: Cible de particuliers
        offerSections:
        - template: pricingcolumn
          color: Blue
          title: Ciblage large
          price: "40"
          offerdesctription: Pour les études qui ciblent le très grand public
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 20€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: 5 critères démographiques
            offerDetailSubItems:
            - offerDetailSubItemLabel: Age
            - offerDetailSubItemLabel: Genre
            - offerDetailSubItemLabel: Pays de résidence
            - offerDetailSubItemLabel: Langue (langue du pays ou EN)
            - offerDetailSubItemLabel: Appareils
          - icon: Lock
            offerDetailLabel: Jusque 3 questions de sélection
            offerDetailSubItems: []
          id: broadTargeting
          offerdescription: Pour les études qui ciblent le très grand public
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: par participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
        - template: pricingcolumn
          color: Green
          title: Ciblage précis
          price: "60"
          offerdesctription: Ciblez des participants à la démographie précise
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 20€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: Tous les critères démographiques
            offerDetailSubItems:
            - offerDetailSubItemLabel: Critères LARGES +
            - offerDetailSubItemLabel: Ville residence
            - offerDetailSubItemLabel: Situation familiale
            - offerDetailSubItemLabel: Situation professionnelle
            - offerDetailSubItemLabel: Niveau d'éducation
            - offerDetailSubItemLabel: Revenu
            - offerDetailSubItemLabel: Aisance avec le numérique
          - icon: Tick
            offerDetailLabel: Questions de sélection illimitées
            offerDetailSubItems: []
          offerdescription: Ciblez des participants à la démographie précise
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: par participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
      - title: Cible de professionnels
        offerSections:
        - template: pricingcolumn
          color: Purple
          title: Employés
          price: "100"
          offerdesctription: Pour les études qui s'intéressent aux outils et process
            des employés
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 30€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: Critères professionnels de base
            offerDetailSubItems:
            - offerDetailSubItemLabel: Ciblage LARGE +
            - offerDetailSubItemLabel: Tech Savviness
            - offerDetailSubItemLabel: Education level
            - offerDetailSubItemLabel: Professional situation
            - offerDetailSubItemLabel: Industry
            - offerDetailSubItemLabel: Company size
            - offerDetailSubItemLabel: Company type
          - icon: Tick
            offerDetailLabel: Questions de sélection illimitées
            offerDetailSubItems: []
          id: ''
          offerdescription: Pour les études qui s'intéressent aux outils et process
            des employés
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: par participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
        - template: pricingcolumn
          color: Black
          title: Managers
          price: "140"
          offerdesctription: Pour les études qui veulent obtenir des retours de décisionnaires
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 40€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: Tous les critères démographiques
            offerDetailSubItems:
            - offerDetailSubItemLabel: Ciblage EMPLOYES +
            - offerDetailSubItemLabel: Niveau hiérarchique
            - offerDetailSubItemLabel: Titre du poste
          - icon: Tick
            offerDetailLabel: Questions de sélection illimitées
            offerDetailSubItems: []
          id: ''
          offerdescription: Pour les études qui veulent obtenir des retours de décisionnaires
          bodybackgroundcolor: White
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
  - tablabel: Participants en présentiel
    childrenpanel:
    - template: offersection
      component: OffersectionsBlock
      element_id: TargetingOptions
      Sections:
      - title: Cible de particuliers
        offerSections:
        - template: pricingcolumn
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: par participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
          color: Blue
          title: CIBLAGE LARGE
          price: "50"
          offerdesctription: Pour les études qui ciblent le très grand public
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 30€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Lock
            offerDetailLabel: 5 critères démographiques
            offerDetailSubItems:
            - offerDetailSubItemLabel: Age
            - offerDetailSubItemLabel: Genre
            - offerDetailSubItemLabel: Pays de résidence
            - offerDetailSubItemLabel: Langue (langue du pays ou EN)
            - offerDetailSubItemLabel: Appareils
          - icon: Lock
            offerDetailLabel: Jusque 3 questions de sélection
            offerDetailSubItems: []
          id: broadTargeting
          offerdescription: Pour les études qui ciblent le très grand public
          bodybackgroundcolor: White
        - template: pricingcolumn
          isAvailable: true
          priceUnit: "€"
          priceSubtitle: per participant
          bottomButtonLabel: Choose
          bottomButtonRedirectionUrl: https://app.tandemz.io/recruit-participants
          color: Green
          title: PRECISE TARGETING
          price: "70"
          offerdesctription: Ciblez des participants à la démographie précise
          offerdetails:
          - icon: Present
            offerDetailLabel: Contrepartie de 30€ inclue pour une réunion de 30 min
            offerDetailSubItems: []
          - icon: Tick
            offerDetailLabel: Tous les critères démographiques
            offerDetailSubItems:
            - offerDetailSubItemLabel: Critères LARGES +
            - offerDetailSubItemLabel: Ville residence
            - offerDetailSubItemLabel: Situation familiale
            - offerDetailSubItemLabel: Situation professionnelle
            - offerDetailSubItemLabel: Niveau d'éducation
            - offerDetailSubItemLabel: Revenu
            - offerDetailSubItemLabel: Aisance avec le numérique
          - icon: Tick
            offerDetailLabel: Questions de sélection illimitées
            offerDetailSubItems: []
          offerdescription: Ciblez des participants à la démographie précise
          bodybackgroundcolor: White
  title: Transparent prices for every target and every study
- template: ctablock
  component: CtaBlock
  type: ctablock
  bg: orange
  title: Vous ne savez pas quelle option de ciblage est la plus adaptée à vos besoins
    ? Parlons-en !
  actions:
  - url: https://calendly.com/marinew/salesneed
    label: Parlez avec un·e expert·e
    title: ''
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
