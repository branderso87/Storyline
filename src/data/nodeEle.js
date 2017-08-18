let nodeEle = {
  nodes: [
    //Main StoryLine!!!!!
    { data: {
      id: 'Storyline',
      name: 'Storyline',
      href: 'http://cytoscape.org',
      text: ''
      },
      classes: 'storyline',
      position: {x: 0, y: 100}
    },
    { data: {
        id: 'The Reaping',
        name: 'The Reaping',
        href: 'http://fanfiction.net',
        text: ''
        // parent: 'theReaping'
      },
      classes: 'majorPlotPoint',
      position: {x: 200, y: 100}
    },
    { data: {
        id: 'Interview',
        name: 'Interview',
        href: 'http://archiveofourown.org',
        text: ''
        // parent: 'interview'
      },
      classes: 'majorPlotPoint',
      position: {x: 400, y: 100}
    },
    { data: {
        id: 'The Hunger Games Begin',
        name: 'The Hunger Games Begin',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'theHungerGamesBegin'
      },
      classes: 'majorPlotPoint',
      position: {x: 600, y: 100}
    },
    { data: {
        id: 'Rue\'s Death',
        name: 'Rue\'s Death',
        href: 'http://js.cytoscape.org',
        text: ''
      },
      classes: 'majorPlotPoint',
      position: {x: 800, y: 100}
    },
    { data: {
        id: 'The Poison Berries',
        name: 'The Poison Berries',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'thePoisonBerries'
      },
      classes: 'majorPlotPoint',
      position: {x: 1000, y: 100}
    },
    { data: {
        id: 'Returning Home',
        name: 'Returning Home',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'returningHome'
      },
      classes: 'majorPlotPoint',
      position: {x: 1200, y: 100}
    },

    // Subplot data!!!!

    { data: {
       id: 'subPlot',
       name: 'subPlot',
       href: 'http://cytoscape.org',
       text: ''
     },
      classes: 'subPlot',
      position: {x: 0, y: 0}
    },
    { data: {
        id: 'theReaping',
        name: '',
        href: 'http://fanfiction.net',
        text: ''
        // parent: 'The Reaping'
      },
      classes: 'majorPlotPoint',
      position: {x: 133, y: 0}
    },
    { data: {
        id: 'the Boy w/ Bread',
        name: 'the Boy w/ Bread',
        href: 'http://archiveofourown.org',
        text: ''
      },
      classes: 'minorPlotPoint',
      position: {x: 269, y: 0}
    },
    { data: {
        id: 'interview',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'Interview'
      },
      classes: 'majorPlotPoint',
      position: {x: 402, y: 0}
    },
    { data: {
        id: 'Scene on the Roof',
        name: 'Scene on the Roof',
        href: 'http://js.cytoscape.org',
        text: ''
      },
      classes: 'minorPlotPoint',
      position: {x: 535, y: 0}
    },
    { data: {
        id: 'theHungerGamesBegin',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'The Hunger Games Begin'
      },
      classes: 'majorPlotPoint',
      position: {x: 668, y: 0}
    },
    { data: {
        id: 'Finds Peeta in the Cave',
        name: 'Finds Peeta in the Cave',
        href: 'http://js.cytoscape.org',
        text: ''
      },
      classes: 'minorPlotPoint',
      position: {x: 801, y: 0}
    },
    { data: {
        id: 'The Kiss',
        name: 'The Kiss',
        href: 'http://js.cytoscape.org',
        text: ''
      },
      classes: 'minorPlotPoint',
      position: {x: 934, y: 0}
    },
    { data: {
        id: 'thePoisonBerries',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'The Poison Berries'
      },
      classes: 'majorPlotPoint',
      position: {x: 1067, y: 0}
    },
    { data: {
        id: 'returningHome',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'Returning Home'
      },
      classes: 'majorPlotPoint',
      position: {x: 1200, y: 0}
    },

    //Subplot DOS(2)
    { data: {
       id: 'subPlot2',
       name: 'subPlot2',
       href: 'http://cytoscape.org',
       text: ''
     },
      classes: 'subPlot2',
      position: {x: 0, y: 200}
    },
    { data: {
        id: 'theReaping2',
        name: '',
        href: 'http://fanfiction.net',
        text: ''
        // parent: 'The Reaping'
      },
      classes: 'majorPlotPoint',
      position: {x: 200, y: 200}
    },
    { data: {
        id: 'At Home w/ Prim',
        name: 'At Home w/ Prim',
        href: 'http://archiveofourown.org',
        text: ''
      },
      classes: 'minorPlotPoint',
      position: {x: 400, y: 200}
    },
    { data: {
        id: 'Befriends Rue',
        name: 'Befriends Rue',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'Interview'
      },
      classes: 'minorPlotPoint',
      position: {x: 600, y: 200}
    },
    { data: {
        id: 'ruesDeath',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'The Hunger Games Begin'
      },
      classes: 'majorPlotPoint',
      position: {x: 800, y: 200}
    },
    { data: {
        id: 'thePoisonBerries2',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'The Poison Berries'
      },
      classes: 'majorPlotPoint',
      position: {x: 1000, y: 200}
    },
    { data: {
        id: 'returningHome2',
        name: '',
        href: 'http://js.cytoscape.org',
        text: ''
        // parent: 'Returning Home'
      },
      classes: 'majorPlotPoint',
      position: {x: 1200, y: 200}
    },
    {data: {id: 'addStoryline', label: ''}}

  ]
}

export default nodeEle
