---
og_image_width: 324
og_image_height: 216
hashtags:
- ux research
- user research
- 5 persons rule
- Nielsen
template: post
twitter_card: summary_large_image
ogtype: article
title: 5-testeurs-suffisent-mythe
full_title: "Tester avec 5 personne suffit-il vraiment ? \U0001F914"
date: 2022-10-04T22:00:00Z
thumb_img_path: "/images/5personstitle.jpg"
content_img_path: ''
excerpt: On entend partout que 5 personnes suffisent pour tester une interface ! Ce
  n'est pourtant pas aussi simple - ensemble, démêlons le vrai du faux.
author: src/data/authors/francew.json
keywords: UX research, user research, usability testing, user tests, Nielsen, 5 persons
  rule, test sample size
ogimage: "/images/5personstitle-1.jpg"
beforeFooterSections: []

---
“Quelle est la taille de l’échantillon que je dois prendre pour ma recherche utilisateur ?” - c’est probablement la question que l’on pose le plus, surtout quand on débute.

Elle se pose particulièrement pour les études qualitatives, où on a toujours peur que les retours obtenus ne soient pas suffisamment nombreux pour prendre les bonnes décisions. Et c’est là qu’un chiffre en particulier ne cesse de remonter : le fameux chiffre 5 !

5 utilisateurs suffiraient pour apprendre tout ce dont on a besoin d’apprendre 🤔

Pourtant ce n’est pas aussi simple : 5 n’est pas un chiffre magique que l’on peut sortir à toutes les sauces et en toutes conditions, tous les experts s’accordent là dessus. Mais ce mythe a la peau dure, et la communauté a du mal à s’en défaire.

Aujourd’hui, démêlons le vrai du faux, pour essayer de trouver une réponse satisfaisante à notre question ! Il faudra pour cela aller jusque dans les fondements mathématiques de la théorie - si vous êtes allergique aux mathématiques, pas de panique, sautez directement au segment “Pour résumer” ;)

## Aux origines du mythes

En 1993, Jakob Nielsen (co-fondateur du célèbre Nielsen Norman Group) et Thomas Landauer publient [**A mathematical model of the finding of usability problems**](https://dl.acm.org/doi/epdf/10.1145/169059.169166).

Ce papier de recherche est résumé en 2000 dans l’article de blog [**Why You Only Need to Test with 5 Users**](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) qui fera le tour du monde - et est, à bien des égards, considéré comme étant à l’origine du mythe !

La conclusion de son article : **5 utilisateurs permettent de découvrir 85% des problèmes d’une interface.**

## Comprendre le papier d’origine

Comme tout texte scientifique, pour bien en comprendre la conclusion il faut avoir en tête les hypothèses et le contexte sur lequel le texte se fonde.

### Cadre et définitions

Dans leur papier, Nielsen et Landauer s’intéressent uniquement aux **tests utilisateurs et aux** [**évaluations heuristiques**](https://www.tandemz.io/posts/10-heuristiques-ux/), dont l’objectif est selon eux de dresser **une liste la plus exhaustive possible de problèmes d’utilisabilité survenant sur une interface**.

Un nouveau problème remonté = un élément ajouté à la liste.

Il n’est jamais question ni de gravité, ni de fréquence, ni d’impact sur le besoin utilisateur.

D’ailleurs, ces deux méthodes sont catégorisées comme des **méthodes de debugging.**

### Objectif

Les auteurs cherchent à trouver une façon **d’optimiser les coûts d’une étude d’utilisabilité,** en optimisant le ratio **nombre de problèmes remontés / nombre de tests faits.**

Cet aspect financier est très important : ils y dédient 2 pages sur 7 de leur papier. En effet, Nielsen milite depuis 1989 pour la [Discount Usability](https://www.nngroup.com/articles/discount-usability-20-years/), une approche de la recherche utilisateur itérative et “quick and dirty”, à une époque où les méthodes de recherches sont très généralement soumises à des notions de rigueurs statistiques héritées de la recherche académique. Selon lui, la perte en fiabilité des données récoltées est largement compensée par la flexibilité qu’un format plus court et plus itératif apporte - une notion peu acceptée de ses pairs en 1993.

### Constat

Nielsen et Landauer se basent sur la loi des rendements décroissants. L’idée est la suivante : si vous testez avec deux personnes, il est probable qu’une partie des problèmes qu’ils remontent soient les mêmes. Si vous testez avec une troisième personne, idem, elle remontra sûrement des problèmes déjà en partie été détectés soit par le testeur 1, soit par le testeur 2, soit par les deux.

Par conséquent, **plus on a de testeurs, plus on tombe souvent sur des problèmes déjà rencontrés, et moins on découvre des problèmes nouveaux.**

Ils vont donc chercher à déterminer à partir de combien de tests est-ce qu’il n’est plus rentable de continuer d’en faire, car le nombre de problèmes remontés sera trop faible par rapport à l’investissement (tant financier qu’en temps humain) que demande un test.

### Modèle mathématique

_Attention, c’est là qu’on rentre dans le dur du sujet ! Si vous n’avez pas envie d’entrer à ce niveau de détails, vous pouvez_ [_sauter directement à nos conclusions_](#summary "Aller à la conclusion") _! Promis, on ne dira rien_ 😉

Cette loi des rendements décroissants peut être modélisée selon cette formule :

P = N(1-(1-L)^n)

avec :

* P le nombre de problèmes rencontrés
* N le nombre de problèmes au total
* n le nombre d’utilisateurs avec qui on teste
* L la proportion moyenne de problèmes rencontrés par un utilisateur (si en moyenne chaque utilisateur remonte 20% des problèmes d’une interface, et en rate 80%, alors L=0,2).

L étant une moyenne, pour augmenter la fiabilité du modèle, il faut que l’échantillon d’utilisateurs pour des tests soit à peu près homogène, c’est-à-dire, qu’il s’agisse d’utilisateurs représentatifs de la même population.

### Résultat

Les auteurs **avancent empiriquement que L = 0,31** (31%), ce qui donne le graphique suivant :

![](/images/nielsenmodelgraph.png)

Effectivement, d’après ces résultats, **avec n = 5, on trouve 85% des problèmes d’une interface**. De plus, on voit bien que, au delà de 5, chaque nouvel utilisateur avec qui on teste ne rapporte que peu de nouveaux problèmes détectés (seulement +5% avec le testeurs 6, +3% avec le testeur 7, etc).

En réalité, le papier de 1993 n’insiste pas tellement sur le chiffre de 5, mais plutôt sur le modèle créé, qui selon les auteurs doit servir de base pour aider les équipes de développement à prédire le bon nombre de tests pour faire avancer leur projet tout en optimisant le ROI de la recherche utilisateur.

C’est surtout Nielsen qui pousse le chiffre 5, avec ses différents articles notamment ceux publiés en [2000](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/), [2009](https://www.nngroup.com/articles/discount-usability-20-years/) et [2012](https://www.nngroup.com/articles/how-many-test-users/), dans lesquels il dit explicitement que **tester avec 5 utilisateurs suffit.**

## Les problèmes

Peut-être que vous êtes en train de vous dire : “Mais du coup, je ne vois pas le problème ! Le fondement mathématique derrière ces dires semble solide !”

Oui et non ! Il existe en fait deux catégories de problèmes qui font que cette affirmation - devenue axiome du monde de la recherche utilisateur depuis le temps - est en réalité un mythe :

* ceux liés à une sur-simplification ou à une mauvaise interprétation de cette théorie
* ceux liés aux limites mêmes du modèle de Nielsen et Landauer

### Problèmes de sur-simplification

Souvenez-vous de vos cours de mathématiques. Vous avez sûrement déjà été repris·e par votre professeur pour avoir essayé d’appliquer un théorème sans avoir vérifié d’abord si les conditions du théorème s’appliquaient.

Eh bien, c’est souvent ce qu’il se passe quand on interprète l’affirmation : **tester avec** **5 utilisateurs suffit !**

Voici des erreurs communes que l’on voit passer :

#### 1. **Appliquer la règle des 5 testeurs aux mauvaises méthodes**

Cette erreur survient dès qu’on oublie que Nielsen parle de trouver **85% des problèmes d’une interface lors de tests utilisateurs**.

La démarche qui l’intéresse est à la fois évaluative et qualitative, et ses résultats ne peuvent ni s’appliquer aux méthodes quantitatives, ni aux méthodes exploratoires.

Il faut donc éviter :

* ❌ de faire des interviews avec uniquement 5 personnes : dans le cadre d’interviews, l’objectif est de comprendre l’expérience, les motivations et besoins d’une population. La nature des données est différente, et couvre des notions bien plus larges que celle de “problèmes d’une interface”. Il paraît donc logique qu’on ne puisse pas faire le tour d’un sujet exploratoire en 5 personnes seulement. L’entreprise de Nielsen le dit elle-même, les interviews ne sont pas des tests d’utilisabilité, et [5 interviews, ce n’est pas suffisant.](https://www.nngroup.com/articles/interview-sample-size/) Mais du coup, qu’est-ce qui l’est ? Il n’existe pas de règle générale, si ce n’est : arrêtez-vous quand vous aurez l’impression de ne plus rien apprendre. Cela peut arriver au bout de 10 interviews, comme cela peut arriver au bout de 50.
* ❌ de faire des tests non-modérés avec uniquement 5 personnes : l’objectif et les mesures ne sont pas les mêmes, et la règle des 5 ne s’applique donc pas. Là où l’objectif de Nielsen, en test qualitatif est d’obtenir une liste de problèmes, son objectif en quanti est plutôt de savoir combien rencontrent ce problème, à quelle échelle, avec quel impact, à travers des mesures de durée, de fréquence etc. Ces mesures ont d’avantage le besoin d’être fiables statistiquement, et ainsi la recommandation de Nielsen lui même est de passer plutôt à [20 testeurs](https://www.nngroup.com/articles/quantitative-studies-how-many-users/), ou \[40, selon la marge d’erreur que vous êtes prêt·e à accepter\]([https://www.nngroup.com/articles/summary-quant-sample-sizes/#:\~:text=Summary%3A](https://www.nngroup.com/articles/summary-quant-sample-sizes/#:\~:text=Summary%3A "https://www.nngroup.com/articles/summary-quant-sample-sizes/#:~:text=Summary%3A")[ 40 participants is an,you can recruit fewer users.)](https://www.nngroup.com/articles/summary-quant-sample-sizes/#:\~:text=Summary%3A%2040%20participants%20is%20an,you%20can%20recruit%20fewer%20users.)).
* ❌ de faire des questionnaires avec uniquement 5 personnes : même si cela paraît pour la plupart complètement logique, rappelons-le tout de même ! Avec un questionnaire, l’objectif est souvent de pouvoir extrapoler les résultats obtenus auprès d’un échantillon à une population plus large. La signification statistique de cet échantillon devient alors essentielle. Heureusement, de nombreux [calculateurs en ligne](https://www.surveymonkey.com/mp/sample-size-calculator/) peuvent vous aider à en déterminer la bonne taille.

_🤔 A noter : on parle depuis le début de méthodes de recherche appliquées à de l’interface. Est-ce que la théorie de Nielsen s’applique aussi au test d’objets physiques ou de services ? Peut-on trouver 85% des problèmes d’ergonomie d’un siège, ou des frictions rencontrées par un voyageur à l’aéroport, avec 5 participants ? Malheureusement, lors de la rédaction de cet article, nous n’avons pas trouvé d’éléments de réponse à cette question en particulier ! Affaire à suivre…_

#### 2. Prendre n’importe quelles 5 personnes

Nielsen le mentionne uniquement de façon passagère dans son papier de recherche et dans son article, sûrement parce que c’est un fondement de la recherche utilisateur qu’il n’a pas jugé utile de répéter - cependant, il aurait probablement du !

Pour que la recherche utilisateur soit valide (quelle que soit la méthode), il faut que les utilisateurs soient **représentatifs de la cible** du produit testé.

Ainsi quand on dit “tester avec 5 utilisateurs suffit !” on dit bien **utilisateur** (ou à la rigueur, potentiel utilisateur), et non “personne”.

Si vous testez votre application de recherche d’emploi avec vos parents à la retraite depuis 10 ans, vous pouvez être sûr·e que vous n’obtiendrez pas des résultats aussi exhaustifs ni aussi pertinents que si vous testiez avec des personnes en recherche d’emploi en ce moment même.

<p style="background-color:#E3F4FF;padding:16px;border-radius:4px;">💡 Trouver des utilisateurs représentatifs de votre cible vous paraît plus facile à dire qu’à faire ? Laissez-nous vous aider ! Chez Tandemz, c’est notre spécialité ! Vous ne nous croyez-pas ? [Jetez un oeil aux recrutements passés que nous avons déjà effectués ! ](https://www.tandemz.io/posts/tandemz-past-recruitment-database/)</p>

#### 3. Tester avec 5 utilisateurs aux profils trop différents

Le modèle de Nielsen ne fonctionne réellement que si les utilisateurs qui testent sont représentatifs de la même cible.

_Note : il n’explique pas exactement pourquoi dans son texte, mais cela doit être du au fait que dans sa formule, un élément important est la variable L, la proportion moyenne de problèmes rencontrés par un utilisateur. Or, pour que cette moyenne fasse réellement sens, il faut que les utilisateurs aient des profils et des comportements comparables. Sinon, c’est comme dire qu’un fruit pèse en moyenne 500g, sans distinguer les pommes des pastèques !_

Ce point est souvent négligé, et il n’est du coup pas rare de voir des études faites avec 5 personnes, chaque personne devant représenter à elle seule toute une cible. En réalité, si vous avez plusieurs cibles (par exemple, une cible d’utilisateurs finaux et une cible d’administrateurs, ou même, une cible jeune et une cible plus âgée), il faudrait tester avec 5 personnes de chaque cible pour réellement appliquer les recommandations de Nielsen.

#### 4. Faire un test de 5 personnes et s’arrêter là

Comment mentionné plus haut, l’objectif premier de Nielsen était de maximiser le ROI des tests d’usabilité. En effet, dans les années 90, il cherche à pousser les entreprises qui n’ont ni les moyens ni le temps de faire de la recherche d’en faire quand même - quitte à être moins rigoureux sur les méthodes traditionnelles. **Mais à une condition : itérer !**

Dans cette même veine, Nielsen a toujours recommandé de faire de **multiples itérations de 5 tests**. En effet, dans un contexte où les interfaces évoluent très vite, il devient inutile de dresser en une fois une liste très exhaustive des problèmes d’utilisabilité d’un produit : il est probable que de toute façon, l’équipe de développement ne puisse pas la résoudre dans son intégralité, rendant cette liste rapidement obsolète aux grés des évolutions de l’interface. Il faut ainsi privilégier un suivi continu mais moins exhaustif, pour pouvoir aider les choix des équipes de développement sur la durée.

<p style="background-color:#E3F4FF;padding:16px;border-radius:4px;">💡 Itérez rapidement et facilement avec nos offres de crédits Tandemz! L’achat de crédits prépayés vous permet de faire des économies et d’accélérer vos cycles de recherche, tout en vous évitant la démultiplication des allers-retours de facturation. Pour plus d’infos, [contactez-nous](/contact "Contactez-nous") ! </p>

Ainsi dès le départ, l’affirmation “**5 utilisateurs permettent de découvrir 85% des problèmes d’une interface”** vient avec son lot d’astérisques, de “si“ et de “mais”, qui ne la rendent pas applicable universellement. Malheureusement, et comme trop bien souvent, la communauté s’est avant tout emparée d’une forme simpliste et fausse du modèle.

Mais même si on prend bien en compte toutes ces nuances et paramètres, est-ce que le modèle de Nielsen est réellement 100% fiable ?

### Les limites du modèle

#### Est-ce que L = 0.31 est vraiment généralisable ?

Pour rappel, Nielsen avance empiriquement que, en moyenne, un utilisateur va trouver 31% des problèmes d’une interface. C’est de cette hypothèse appliquée à son modèle que découle l’affirmation “5 utilisateurs découvrent 85% des problèmes d’une interface”.

Si en fait L=0.2 (donc un utilisateur trouve 20% des problèmes), le chiffre pour trouver 85% des problèmes passe de 5 à 9. C’est presque le double ! Et avec 5 personnes, on ne trouve finalement plus que 67% des problèmes.

Or, cette variable L dépend en réalité de nombreux facteurs :

* du type d’utilisateurs (sont-ils novices ou plutôt habitués de cette interface ?)
* de la complexité de l’interface testée, et du scope des tâches du test
* du niveau d’itération de l’interface (en effet, si une interface est déjà passée par des itérations de tests et d’améliorations, théoriquement cela veut dire que les problèmes les plus évidents ont déjà été repérés et corrigés - ne restent plus que les problèmes plus subtils et donc moins détectables)
* du niveau de l’évaluateur

Il n’y a donc aucune raison de penser que L=0.31 est vraiment généralisable.

Cela veut dire que pour utiliser de façon vraiment fiable la formule de Nielsen, il faudrait pouvoir calculer L. Sauf que, pour calculer L, il faut connaître le nombre total de problèmes dans l’interface ! Un nombre qu’on ne connaît a priori pas, puisque tout l’intérêt de la démarche de test d’utilisabilité est de les découvrir.

#### Empiriquement, ça ne marche pas tout à fait

Plusieurs études qui ont suivi les travaux de Nielsen et Landauer ont eu pour démarche de tester un site avec un certain nombre d’utilisateurs, et de voir quelle proportion de problèmes ils auraient réellement trouvés s’ils s’étaient arrêtés à 5. Or surprise : on en trouve rarement 85% !

Celle que nous avons trouvé la plus intéressante (car il serait trop long de toutes les résumer) est la suivante :

En 2002, Faulkner publie un [papier de recherche](https://link.springer.com/content/pdf/10.3758/BF03195514.pdf), dans lequel elle a réalisé des tests avec 60 utilisateurs. Puis, à l’aide d’un logiciel, elle a créé 100 sélections aléatoires, en sets de respectivement 5, 10, 15 et 20 participants, pour ainsi simuler ce qu’il se serait passé si elle n’avait testé qu’avec ces participants.

Pour les sets de 5, elle remarque ainsi que selon les utilisateurs sur lesquels elle serait tombée, elle aurait pu espérer trouver entre 55% et 100% des problèmes - ce qui présente une variance énorme ! A noter tout de même que, en moyenne sur les 100 sets de 5 utilisateurs, elle trouvait bien 85% des problèmes de l’interface.

![](/images/5testersset.png)

Pour les sets de 10 utilisateurs, elle était plutôt entre 82% et 100%, avec une moyenne de 95%

![](/images/10testersset.png)

Et ainsi de suite :

![](/images/allsets.png)

Cette étude corrobore bien le modèle de Nielsen et Landauer, mais uniquement en moyenne ! Ramenée au cas réel d’une étude terrain, cette moyenne ne peut pas malheureusement pas s’appliquer.

La réalité est donc plutôt la suivante : **avec 5 utilisateurs, vous trouverez entre 55% et 100% des problèmes de votre interface !** A vous de voir ensuite si cet intervalle de taux est acceptable ou non.

#### Quid de la sévérité des problèmes ?

Le modèle de Nielsen et Landauer ne se pose pas du tout la question de la sévérité d’un problème. Découvrir 85% des problèmes, cela ne veut pas dire découvrir 85% des problèmes les plus graves ni les plus bloquants !

On pourrait croire que plus un problème est bloquant, plus il est évident, et donc plus il sera vu rapidement. C’est d’ailleurs la théorie de Virzi de 1990 - or Nielsen et Landauer se sont beaucoup appuyés sur ses travaux pour créer leur modèle.

Pourtant, il a depuis été plutôt [théorisé](https://measuringu.com/problem-severity/) qu’il n’y a en fait aucune corrélation entre sévérité et découvrabilité d’un problème.

La question de la sévérité se pose du coup plutôt dans l’autre sens : si 5 utilisateurs découvrent 85% des problèmes, et qu’il y a une probabilité non nulle que parmi les 15% restants, il y ait des problèmes graves, est-ce vraiment acceptable de s’arrêter là ? On pourrait par exemple donner l’exemple des produits avec des applications médicales ou de navigation, où le moindre défaut de conception ou de développement peut éventuellement mettre en danger le bien-être voire la vie de leurs usagers.

## Pour résumer

<div id="summary"> L’affirmation “Tester avec 5 personnes suffit” n’est pas complètement fausse - elle est juste très imprécise, et surtout, elle vient avec beaucoup de limites et de conditions qu’il est facile d’oublier ! </div>

L’affirmation complète devrait plutôt être : **Tester avec 5 utilisateurs permet de trouver entre 55% et 100% des problèmes d’une interface.**

Mais attention, pour que cette affirmation soit réellement valable, il faut :

* ✅ Vous placer dans le cadre de **tests d’utilisabilité d’une interface.**  
  ❌ N’essayez pas de l’appliquer aux interviews exploratoires ni aux méthodes quantitatives !
* ✅ Tester avec 5 utilisateurs dans la **cible de votre produit**  
  ❌ Avec des personnes à qui votre produit ne s’adresse pas, les taux de problèmes découverts sont encore plus bas.
* ✅ Tester avec 5 utilisateurs **au profil et aux comportements similaires**  
  ❌ En prenant 5 utilisateurs trop différents, la fourchette de problèmes rencontrés devient carrément aléatoire.
* ✅ S’assurer que chaque utilisateur trouve environ 30% des problèmes d’une interface   ❌ En pratique, ce chiffre est non seulement très difficile à vérifier, il est aussi très variable. Or, moins vos utilisateurs trouvent de problèmes, plus il vous en faut pour vos tests !
* ❌ Oublier les notions de fréquences ou de criticité des problèmes. Après 5 tests, vous avez tout de même la possibilité d’être passé·e à côté de problèmes bloquants ou graves.

## Si ce n’est pas 5, alors combien ?

Malheureusement, la seule vraie réponse est : ça dépend !

Eh oui, les facteurs qui influent sur la qualité, la pertinence et l’exhaustivité des retours sont tellement nombreux, qu’en réalité, le seul moyen de savoir si on en a fait assez, c’est… d’en avoir fait assez pour s’en rendre compte ! Comme pour les interviews, à partir du moment où vous n’obtenez plus de retour nouveau, vous pouvez probablement considérer que vous avez fait le tour du sujet.

Oui on sait, cette réponse apporte très peu satisfaction… Et c’est bien là le problème : le manque de réponse définitive donne vraiment envie d’adhérer à cette théorie, si simple et si mémorable, du “5 utilisateurs suffisent” - et c’est pour ça que le mythe s’est répandu aussi vite !

Mais finalement, est-ce que c’est la bonne question à se poser ?

Le modèle de Nielsen est avant tout un modèle d’optimisation du ROI de la recherche. Il n’a jamais réellement été question de savoir combien de personnes permettent de trouver combien de problème - mais plutôt, d’accepter que :

* plus vous testez, plus cela vous coûtera cher, en temps comme en argent - et ce coût n’est pas linéaire, mais plutôt exponentiel, à cause de la redondance que vous allez avoir au cours des tests
* moins vous testez, moins vous comprendrez ce qu’il faut améliorer sur le produit, et plus vous avez de chance de laisser passer des problèmes qui peuvent s’avérer graves.

Le tout est de trouver un bon équilibre entre efforts de recherche et exhaustivité des résultats - et d’accepter les conséquences de son choix.

Notre conseil ? Définissez d’abord votre priorité ainsi que le niveau de risque acceptable associé ! Posez-vous ainsi les questions suivantes :

* Un problème sur votre produit ou parcours peut-il avoir un impact grave sur vos utilisateurs ? Si oui, alors privilégiez l’exhaustivité.
* Si non, avez-vous le budget et le temps de tester avec 15 personnes ? 10 personnes ? 5 personnes ? Si non, contentez-vous de ce que vous pouvez réaliser comme tests, et essayez d’itérer le plus souvent possible pour compenser.
* Si oui, et que ces personnes remontent beaucoup de problèmes, aurez-vous la capacité de développement pour les corriger rapidement avant votre prochain cycle de test ? Ajustez alors la nombre de personnes visées en fonction de votre capacité de développement.