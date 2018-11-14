import React from 'react'

import CodeProject from '../../components/codeProject'
import Layout from '../../components/layout'

const coucou = (
  <CodeProject
    title="Nukemap"
    description={[
      'A map showing various nuclear places in France. For each of these, various information sources are gathered in order to provide some great information about these places, and a way to show citizens things that happen in these places.',
      'It is a way of studying risks related to nuclear energy',
    ]}
    tags={['react', 'node', 'mongo', 'graphql', 'cartography', 'sideproject']}
    showcase="http://fabien.cool/nukemap/"
    repo="https://github.com/fabienheureux/nukemap"
    year="2018"
  />
)

const SecondPage = () => (
  <Layout>
    <CodeProject
      title="Wing"
      description={[
        'Development of a new product at Wing.',
        'There was a need for a new platform, plugged to UPS (and other carriers) API in order to book loads of shippings smoothly, and keep track of them in a clean backoffice.',
        "I built an event-driven architecture, using AWS SQS and AWS Lambda in order to ensure that every shipping's request would be properly processed, and that every request to external APIs would be made at minimal costs.",
        'I also used a monorepo approach for this project in order to bring consistency accross various microservices developped for this project.',
      ]}
      tags={[
        'react',
        'node',
        'graphql',
        'api',
        'serverless',
        'lerna',
        'aws',
        'docker',
      ]}
      year="2018"
    />
    <CodeProject
      title="Mondelez"
      description={[
        'With BETC for Mondelez.',
        "Development of both the backend and the frontend of a single-page website promoting Mondelez' sustainable farming: Harmony.",
        'One of the key-feature of this project was to provide a consistent UI (and backoffice) for ~ 15 different languages.',
      ]}
      tags={['javascript', 'pixijs', '3d']}
      showcase="http://harmony.info"
      year="2018"
    />
    <CodeProject
      title="PayFit"
      description={[
        "Development of new features on both the frontend and backend of PayFit's internal backoffice.",
        'I also worked on the development of new features on the frontend of the client web application. Mainly signup and signin pages.',
        'Lots of my work at PayFit consisted on connecting external applications (marketing services, or governement taxes services) to internal microservices or CRM tools.',
      ]}
      tags={[
        'react',
        'node',
        'serverless',
        'typescript',
        'docker',
        'mongo',
        'aws',
        'vue',
      ]}
      showcase="https://payfit.com"
      year="2017-2018"
    />
    <CodeProject
      title="RCI Mobility / Renault Mobility"
      description={[
        'Development of various features on the frontend of client apps (Glide, Renault Mobility).',
      ]}
      tags={['react', 'redux']}
      showcase="https://www.renault-mobility.com"
      year="2017"
    />
    <CodeProject
      title="KuB, le webmedia breton de la culture"
      description={[
        "Complete rebuild of KuB's website.",
        'One of the key-aspect of this project was to build a clean backoffice allowing to build complex pages without hassle, containing media from many sources.',
      ]}
      tags={['django', 'react', 'redux']}
      showcase="http://kubweb.media"
      year="2016-2017"
    />
    <CodeProject
      title="Danone"
      description={["With BETC & Cogit Studio.","Worked on a fully rebuild of the DanOn's frontend."]}
      showcase="https://www.dan-on.com"
      tags={['javascript', 'liferay']}
      year="2016"
    />
    <CodeProject
      title="Schneider Electric"
      description={[
        'With BETC & Cogit Studio.',
        "I worked on the frontend development of Schneider Electric's corporate website, and led a full rebranding of it.",
      ]}
      tags={['javascript', 'css', 'html5', 'automation']}
      showcase="https://www.schneider-electric.com"
      year="2015-2016"
    />
  </Layout>
)

export default SecondPage
