import React, { Component } from 'react';

import CodeMirror from "codemirror";

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sparql/sparql';

import './BaseEditor.css';

/**
 * TODO: 
 *  - Expanded tokenizer to accomodate .rql or whatever language keywords like "invoke" come from
 */
export const PLACEHOLDER = `
  PREFIX a: <http://www.w3.org/2000/10/annotation-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

  # Comment!

  SELECT ?given ?family
  WHERE {
    {
      ?annot a:annotates <http://www.w3.org/TR/rdf-sparql-query/> .
      ?annot dc:creator ?c .
      OPTIONAL {?c foaf:givenName ?given ;
                  foaf:familyName ?family }
    } UNION {
      ?c !foaf:knows/foaf:knows? ?thing.
      ?thing rdfs
    } MINUS {
      ?thing rdfs:label "剛柔流"@jp
    }
    FILTER isBlank(?c)
  }
`;

class BaseEditor extends Component {

  public container;
  public editor;

  render() {
    return (
      <div id="editor-container" className="base_editor-container">
        { /* Editor will be injected here */ }
      </div>
    );
  }

  componentDidMount() {
    // instance editor
    this.container = document.querySelector("#editor-container");
    this.editor = CodeMirror(this.container, { 
      value: PLACEHOLDER,
      mode: "application/sparql-query",
      lineNumbers: true,
      matchBrackets: true
    } as any);
    this.editor.setSize(null, 500);
  }
}

export default BaseEditor;