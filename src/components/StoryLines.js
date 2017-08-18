import React, { Component } from 'react'
import cytoscape from 'cytoscape'
import '../styles/index.css'
import '../images/addLrgNodeIcon.svg'
import '../images/addSMLNodeIcon.svg'
import edgesEle from '../data/edgesEle.js'
import nodeEle from '../data/nodeEle.js'

class StoryLines extends Component {
  constructor (props) {
    super(props)
    this.displayCy = this.displayCy.bind(this)
  }

  displayCy () {
    console.log('Cytoscape is rendering')
    let cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,
      zoomingEnabled: true,

      style: cytoscape.stylesheet()
        .selector('node')
          .css({
            'content': 'data(name)',
            'color': 'black',
            'text-valign': 'top',
            'text-halign': 'center',
            // 'text-outline-width': 2,
            // 'text-outline-color': '#BF1363',
            'background-color': '#BF1363',
            'border-color': 'black',
            'border-width': 3,
            'width': 'label',
            'padding': 10
          })
        .selector('node.majorPlotPoint')
          .css({
            'background-color': 'white',
            'padding': 0,
            'width': 50,
            'height': 50
          })
        .selector('node.minorPlotPoint')
          .css({
            'background-color': 'black',
            'padding': 0,
            'width': 20,
            'height': 20
          })
        .selector('node.storyline')
          .css({
            'background-color': '#Ffcc00',
            'text-valign': 'center'
          })
        .selector('node.subPlot')
          .css({
            'background-color': '#00A6FB',
            'text-valign': 'center'
          })
        .selector('node.subPlot2')
          .css({
            'background-color': '#F2187D',
            'text-valign': 'center'
          })
        .selector(':selected')
          .css({
            'background-color': 'black',
            'line-color': 'black',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black',
            'text-outline-color': 'black'
          })
        .selector('edge')
          .css({
            'curve-style': 'bezier',
            'line-color': '#Ffcc00',
            'width': 6
          })
        .selector('edge.subPlot')
          .css({
            'line-color': '#00A6FB'
          })
        .selector('edge.subPlot2')
          .css({
            'line-color': '#F2187D'
          }),
      elements:
      nodeEle,
      edgesEle,

      layout: {
        name: 'preset',
        fit: true,
        direct: false,
        padding: 10,
        avoidOverlap: true
      }
    })

    // cy.on('tap', 'node', function () {
    //   try { // your browser may block popups
    //     window.open(this.data('href'))
    //   } catch (e) { // fall back on url change
    //     window.location.href = this.data('href')
    //     }
    //   })

    // cy.on('tap', 'node.majorPlotPoint', () => {
    //   cy.add({group: 'nodes', data: {'id': 'new', 'name': 'new'}, 'classes': 'majorPlotPoint', 'position': {x: 0, y: -100}})
    // })

    //For all nodes that are +,
    //on tap
    //add node with {data: {new.data.id, name: new.data.name, text: new.data.text}, class: new.data.class, position: position of tapped +}.

    cy.nodes('majorPlotPoint').forEach(function () {
      cy.on('tap', () => {
      cy.add({group: 'nodes', data: {'id': 'new', 'name': 'new'}, 'classes': 'majorPlotPoint', 'position': {x: 0, y: -100}})
      })
    })
  }
  componentDidMount () {
     this.displayCy()
   }

  render () {
    return (
      <div>
        <div id='cy'></div>
      </div>
    )
  }

}

export default StoryLines
