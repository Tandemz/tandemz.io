---
title: Aide en ligne
sections:
- template: faqblock
  component: FaqBlock
  bg: gray
  type: faqblock
  section_id: faqpanel
  title: Créer et gérer son panel
  faqitems:
  - question: Comment ajouter des personnes à mon panel ?
    answer: |-
      Dans l'onglet "Panel" de votre espace, ajoutez des participants à votre panel selon la méthode qui vous convient le mieux :

      ![](/images/ajout.png)

      * **Ajouter les participants manuellement** :

        1- Cliquez sur "Nouveau participant"

        2- Remplissez les champs que vous voulez. Seuls le prénom et l'email sont obligatoires.

        3- Cliquez sur "Enregistrer".
      * **Transmettre un lien d'inscription public à vos participants** : vous n'avez qu'à copier le lien fourni et le transmettre à votre communauté (sur vos réseaux sociaux, par Newsletter, ou autre...). Les participants s'inscrivent d'eux-mêmes et renseignent leurs données.

        Pour paramétrer la page d'inscription :

        1- Cliquez sur "Paramètres du formulaire"

        2- Choisissez un titre, un logo, et les données que les participants devront renseigner. Choisissez les tags qui seront visibles aux participants dans la liste déroulante (ils pourront alors se les affecter).

        3- Cliquez sur "Enregistrer".
      * **Télécharger un CSV avec les données de vos participants** :

        1- Cliquez sur "Import CSV".

        2- Importez votre fichier (format CSV uniquement, contenant une ligne d'en-tête).

        3- Indiquez, pour chaque colonne de votre fichier, quelle est la donnée correspondante. Si votre colonne ne doit pas être importée, laissez le champ vide. Vous devez obligatoirement indiquer une colonne Email identifiante. Indiquez également si vous avez collecté le consentement de ces utilisateurs en amont de l'import.

        4- Votre fichier s'importe. En cas d'erreur, vous pouvez ensuite télécharger le rapport d'erreur. Il vous suffit de le modifier aux données indiquées et de le réimporter.
  - question: Comment inviter mes participants à une session ?
    answer: |-
      Votre session n'est pas encore créée ? Regardez ["Comment créer ma session ?"](#faqsession).

      Votre session est déjà créée ?

      Dans votre onglet "Panel", **sélectionnez les participants** que vous souhaitez inviter à votre session. Vous pouvez utiliser le champ de recherche pour filtrer vos participants (sur un tag, sur un pays, etc...) :

      ![](/images/champ-recherche.png)

      Une fois vos participants sélectionnés :

      1- Choisissez "**Inviter à une session**" (en bas à droite).

      2- Sélectionnez l**a session à laquelle vous souhaitez les inviter** puis sur "Inviter". Votre session n'apparaît pas dans la liste des sessions ? C'est probablement qu'elle n'est pas encore publiée. Seules les sessions actives s'affichent.

      3- Une modale apparaît vous permettant de rédiger un **texte personnalisé** qui sera inséré dans le mail d'invitation à vos participants.

      4- Validez.

      Vos participants ont été invités. Vous les retrouverez dans la colonne "Contactés" de votre tableau de suivi des participants de la session.

      En cas de problèmes, contactez-nous par tchat ou par mail à contact@tandemz.io.
  - question: A quoi correspondent les tags et comment les utiliser ?
    answer: "Les tags vous permettent de **personnaliser entièrement votre panel**
      : vous pouvez en créer autant que vous voulez et les affecter ensuite aux participants.\n\nPour
      **créer un tag**, vous pouvez : \n\n* soit ouvrir la fenêtre d'ajout d'un nouveau
      participant (Ajouter > Nouveau Participant). Dans le champ \"Tags\", tapez vos
      tags et appuyez sur \"Entrée\". Vos tags sont créés !\n* soit ouvrir la fenêtre
      de paramétrage du lien d’inscription (Ajouter > Lien d'inscription public >
      Paramètres du formulaire). Dans le champ \"Tags\", tapez vos tags et appuyez
      sur \"Entrée\". Vos tags sont créés !\n\nPour **filtrer votre panel sur un tag**
      en particulier, tapez le tag dans le champ de recherche : \n\n![](/images/champ-recherche.png)\n\nPour
      **modifier / supprimer l'un de vos tags**, contactez notre support par tchat
      ou à contact@tandemz.io."
  - question: Comment construire mon fichier d'import ?
    answer: "Pour importer vos participants en masse, vous pouvez utiliser la fonction
      Import CSV qui se trouve dans votre onglet Panel :\n\n![](/images/import-csv.png)\n\n####
      Format du fichier\n\nVotre fichier doit respecter les règles suivantes : \n\n*
      Format CSV\n* Avec une ligne d'en-tête (sans règle particulière - cette ligne
      ne sera pas importée)\n* Comportant une colonne Email\n\nLes colonnes peuvent
      être placées dans l'ordre que vous souhaitez.\n\n#### Règles lors de l'import\n\n*
      Pour mettre à jour un participant, il vous suffit d'importer ses données en
      indiquant l'email correspondant comme identifiant. Si une donnée est vide, l'import
      laisse la valeur précédente et n'efface pas le champ.\n* En cas d'erreur sur
      la donnée Email, la ligne n'est pas importée.\n* En cas d'erreur sur les autres
      données (ex: une date invalide, un numéro de téléphone inexistant), la donnée
      est ignorée mais les autres données de la ligne sont bien importées.\n* Des
      vérifications s'appliquent sur les données suivantes : numéro de téléphone,
      date de naissance, code postal, email, genre. Les autres données sont des champs
      textes libres.\n* Pour le genre, les correspondances acceptées sont les suivantes
      : H/Homme/Male/man mappées vers Homme ; F/Femme/Female/Woman mappées vers Femme
      ; Non binaire/Non-Binary/Non_Binary mappées vers Non binaire. Toute autre valeur
      est ignorée.\n* Les formats de dates acceptés sont les suivants : 25/12/1990,
      25/12/1990 22:01:02, 1990-12-25, 1990-12-25 22:01:02, 1990-25-12T21:01:02+01:00,
      662162462 (UNIX timestamp)\n\n#### Import de tags\n\nPour affecter des tags
      aux participants, vous pouvez utiliser l'une des deux méthodes suivantes (ou
      les deux combinées) : \n\n* dans une même colonne, les tags sont séparés par
      des virgules\n* plusieurs colonnes avec chacune un tag\n\nLors de l'import,
      si des tags sont déjà affectés au participant, ils ne sont pas effacés. Les
      nouveaux tags s'ajoutent à ceux existants.\n\nSi le tag n'existe pas encore,
      il est créé lors de l'import.\n\nAttention, les tags sont sensibles à la casse.
      \"Chat\" et \"chat\" sont donc deux tags différents lors de l'import.\n\nEn
      cas de question sur l'import, contactez-nous par tchat ou par mail à contact@tandemz.io."
  title_level_one: true
  subtitle: ''
- template: faqblock
  component: FaqBlock
  bg: gray
  type: faqblock
  section_id: faqsession
  title: Créer et gérer une session
  faqitems:
  - question: Comment créer une session ?
    answer: "Cliquez sur \"Nouvelle session\" (ou \"Créer une session\" si c'est votre
      première !) puis renseignez les informations de votre session (avec une * celles
      obligatoires) :\n\n###### Paramètres de l'annonce\n\n* __Titre de la session*__
      : il s'agit du titre qui s'affiche dans les mails et dans la page d'inscription
      pour les participants.\n* __Description*__ : vous pouvez y écrire un petit texte
      explicatif pour vos participants, afin de leur expliquer le déroulé ou bien
      l'objectif de votre session par exemple.\n* **Contrepartie** : indiquez ce que
      le dédommagement que vous proposez au participant. Si vous n'offrez pas de dédommagement,
      laissez le champ libre.\n\n###### Cible de participants\n\n* __Nombre de participants*__
      : nombre de personnes que vous recherchez pour votre étude.\n* **Origine des
      participants** : vous pouvez choisir de recruter vos participants dans votre
      panel, hors de votre panel (chez Tandemz), dans les deux ou dans aucun des deux.\n\n
      \ Si vous optez pour le recrutement hors de votre panel, indiquez-nous les critères
      que vous recherchez. Nous vous recontacterons dans les plus brefs délais.\n\n
      \ Si vous optez pour le recrutement dans votre panel, vous pouvez alors éditer
      la liste des personnes qui seront notifiées lors de la publication de l'annonce
      en incluant / excluant des tags ou en les décochant manuellement dans \"Voir
      / modifier la liste des destinataires\" et personnaliser le mail qui leur sera
      envoyé.\n\n  Si vous ne souhaitez pas envoyer d'invitation tout de suite ou
      simplement transmettre le lien de l'étude à des personnes externes, ne sélectionnez
      rien et passez à la suite !\n\n###### Questionnaire de sélection (optionnel)\n\nSi
      vous le souhaitez, vous pouvez ajouter un questionnaire à votre annonce afin
      d'obtenir plus d'information au sujet de vos participants et vous aider à sélectionner
      les bons profils.\n\nAjoutez autant de questions que vous le souhaitez, parmi
      les 3 types suivant :\n\n* **Choix multiples :** Proposez à vos participants
      de choisir leur(s) réponse(s) parmi une liste pré-déterminée de choix. Vous
      pouvez autoriser la sélection de réponses multiples, ainsi que limiter la quantité
      de réponses à choisir.\n* **Texte Long**\n* **Texte Court** \n\n###### Formats
      et disponibilités\n\n* __Durée d'une rencontre*__ : le temps de l'étude pour
      le participant\n* __Intervalle minimum*__ : la durée de la pause entre deux
      créneaux possibles\n* __Créneaux*__ : choisissez l'heure et la date de vos disponibilités
      pour la session. Vous devez indiquer au moins autant de créneau qu'il y a de
      participants recherchés.\n* __Format de rencontre*__ : choisissez la ou les
      modalités de l'étude ainsi que les éventuelles instructions. Si vous en sélectionnez
      plusieurs, le choix sera laissé au participant lors de son inscription.\n\nPrévisualisez
      votre annonce. Tout vous semble bon ? Alors publiez. Les invitations aux participants
      de votre panel sélectionnés seront envoyées à cet instant.\n\nVous avez besoin
      d'ajouter un questionnaire de sélection à votre annonce ? Nous avons une solution
      pour vous ! Contactez-nous par tchat ou par mail à contact@tandemz.io."
  - question: Comment suivre l'avancement de ma session ?
    answer: "En cliquant sur votre session, vous disposez de deux onglets : Overview
      et Suivi des participants.\n\n###### Overview\n\nConsultez ici vos différents
      créneaux confirmés ou non, passés ou futur.\n\nPour chaque participant, vous
      avez la possibilité d'annuler sa participation en cliquant sur le menu de paramètres
      à droite de sa ligne.\n\nVous retrouvez en haut à droite de votre écran le lien
      d'inscription à la session, le mode édition de la session (crayon) et la prévisualisation
      :\n\n![](/images/overview.png)\n\n###### Suivi des participants\n\nGérez ici
      vos recrutements dans ce tableau à colonnes :\n\n* **Contactés** : personnes
      que vous avez invitées à votre session mais n’ayant pas encore répondu. \n*
      **A traiter** : personnes ayant répondu au questionnaire de sélection de votre
      annonce. Cliquez sur la carte pour voir le détail de leurs réponses. Vous devez
      choisir de leur proposer un créneau ou bien d'écarter leur profil en cliquant
      sur les boutons correspondants. Vous pouvez également faire glisser les cartes
      dans la colonne correspondante à votre choix.\n* **Rdv proposés** : personnes
      à qui vous avez proposé un créneau (uniquement dans le cas d'annonces avec un
      questionnaire de sélection).\n* **Rdv planifiés** : dès qu'une personne s'inscrit
      à un créneau, elle apparaît dans cette colonne. Si votre annonce ne possède
      pas de questionnaire de sélection, les participants passeront donc automatiquement
      de la colonne Contactés à la colonne Rdv planifiés.\n* **Rdv passés** : les
      personnes que vous avez déjà rencontrées apparaissent automatiquement dans cette
      colonne. Cliquez sur la carte : vous pouvez indiquer la personne comme rémunérée
      si vous lui avez versé son dédommagement, ou bien indiquer qu'elle n'est pas
      venue."
  - question: Comment arrêter le recrutement d'une session ?
    answer: "Finalement, le nombre de participants que vous avez déjà rencontrés vous
      convient ?\n\nIl vous suffit de modifier le nombre de participants recherchés
      dans l'édition de votre session : \n\n1- Rentrez dans votre session\n\n2- Rendez-vous
      dans le menu d'édition de la session (crayon dans le menu supérieur) :\n\n![](/images/overview.png)\n\n3-
      Dans \"Cible de participants\", modifiez le nombre de participants recherchés\n\n4-
      Sauvegardez."
  - question: Comment annuler une session programmée ?
    answer: "Il n'est pas possible d'annuler une session dans Tandemz. Cependant,
      une session active peut être rendue \"Terminée\" si vous ne souhaitez pas la
      poursuivre. \n\nSi votre session a déjà des rendez-vous de programmés, vous
      devez tout d'abord annuler chaque rendez-vous. Pour cela : \n\n1- Rendez-vous
      dans l'onglet Overview de votre session.\n\n2- Cliquez sur le menu à droite
      de chaque participant puis sur Annuler.\n\n![](/images/annuler.png)\n\n3- Renseignez
      un motif à indiquer au participant dans le mail qu'il va recevoir, puis annulez
      le créneau.\n\nUne fois tous les créneaux futurs annulés, modifiez votre session
      en vous rendant dans l'édition de la session (crayon du menu supérieur) : \n\n![](/images/overview.png)\n\nUne
      fois dans l'édition, modifiez au choix : \n\n* Dans \"Cible de participants\",
      le nombre de participants recherchés à 0.\n* Dans \"Formats et disponibilités\",
      supprimez tous les créneaux futurs.\n\nSauvegardez. Votre session aura désormais
      le statut \"Terminée\" et ne seras plus accessible à l'inscription pour les
      participants."
  - question: Quels sont les différents statuts des sessions ?
    answer: |-
      Une session dispose d'un statut, qui peut être :

      * **BROUILLON** : la session n'est pas encore publiée, donc pas encore visible aux participants.
      * **EN COURS** : la session a été publiée et est en cours. Le nombre de participants demandé n'est pas encore atteint et il reste des créneaux disponibles dans le futur.
      * **TERMINÉE** : le nombre de participants demandé est atteint ou il n'y a plus de créneaux disponibles dans le futur.

      Ces statuts sont mis à jour automatiquement, vous n'avez rien besoin de faire.
  title_level_one: false
  subtitle: ''
- template: faqblock
  component: FaqBlock
  bg: gray
  type: faqblock
  section_id: faqparticipant
  title: Pour mes participants
  faqitems:
  - question: Comment mes participants s'inscrivent-ils à une session ?
    answer: |-
      Lorsque vous les invitez à une session ou que vous leur proposez un créneau, vos participants reçoivent une **notification mail**, contenant un lien vers votre annonce.

      Sur cette annonce, ils peuvent **s'inscrire en autonomie** en choisissant un des formats que vous avez sélectionné et un des créneaux que vous avez listé. L'organisateur de la session est **notifié par mail** dès que le participant valide son rendez-vous.

      Suite à son inscription, il reçoit un mail de confirmation depuis lequel il peut, si besoin, **changer ou annuler son créneau**. L'organisateur de la session est alors notifié par mail.
  - answer: |-
      Vos participants reçoivent des notifications **par mail uniquement**, aux événements suivants :

      * Confirmation d'inscription à un panel privé, lorsqu'il complète le formulaire d'inscription public.
      * Invitation à une session
      * Confirmation de la prise de rendez-vous, lorsqu'il a choisi un créneau.
      * Confirmation de la re-programmation d'un rendez-vous, lorsqu'il a changé son créneau.
      * Confirmation de l'annulation d'un créneau, lorsqu'il annule de lui-même.
      * Information de l'annulation d'un créneau, lorsque l'organisateur de la session annule son créneau.
      * Rappel automatique la veille de son rendez-vous.

      De plus, si votre session a une **étape de validation intermédiaire** (par un questionnaire de sélection par exemple), le participant reçoit les notifications mails suivantes :

      * Confirmation de soumission du questionnaire, une fois qu'il a complété sa candidature.
      * Indication que sa participation est validée et proposition de créneaux lorsque l'organisateur choisit "Proposer un créneau".
    question: Quelles notifications mes participants reçoivent-ils ?
  - question: Mes participants peuvent-ils voir ou modifier leurs données ?
    answer: |-
      Non car vos participants n'ont pas de compte sur la plateforme Tandemz. Ils peuvent seulement :

      * **soumettre le formulaire d'inscription** pour rejoindre votre panel privé
      * **s'inscrire à une session** lorsque vous les invitez
      * **re-programmer et/ou annuler leur rendez-vous** (une fois inscrits à l'une de vos sessions)

      Si un participant ne souhaite plus faire partie d'un panel, il contacte directement le support Tandemz qui s'occupe d'effacer ses données (après avoir prévenu le propriétaire de son panel bien sûr).
  title_level_one: false
  subtitle: ''
menus:
  secondary:
    title: Aide en ligne
    weight: 5
template: pricing
description: Toutes les questions sur l'utilisation de Tandemz
keywords: ''
ogtitle: ''
ogdescription: ''
ogtype: website
ogimage: "/images/Logo@200-1.png"
ogimagealt: Tandemz Logo
og_image_width: 200
og_image_height: 200
twitter_card: summary
metatags: []
schema_org_data_list: []

---
