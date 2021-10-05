import React, { useState } from "react"

import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-enterprise"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

import "./App.css"
import "react-tabs/style/react-tabs.css"

function App() {
  const [rowData, setRowData] = useState(null)

  const onGridReady = (params: any) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then(resp => resp.json())
      .then(data => setRowData(data))
  }

  return (
    <div className="App">
      <Tabs
        onSelect={(index: number, lastIndex: number, event: any) => {
          console.log("onSelect", event)
        }}
      >
        <TabList>
          <Tab>Mario</Tab>
          <Tab>Luigi</Tab>
          <Tab>Peach</Tab>
        </TabList>

        <TabPanel>
          {/* <p>
            <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (
            <i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
            character in the Mario video game franchise, owned by Nintendo and
            created by Japanese video game designer Shigeru Miyamoto. Serving as
            the company's mascot and the eponymous protagonist of the series,
            Mario has appeared in over 200 video games since his creation.
            Depicted as a short, pudgy, Italian plumber who resides in the
            Mushroom Kingdom, his adventures generally center upon rescuing
            Princess Peach from the Koopa villain Bowser. His younger brother
            and sidekick is Luigi.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
              Wikipedia
            </a>
          </p> */}
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%",
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              defaultColDef={{
                flex: 1,
                minWidth: 150,
                filter: true,
              }}
              onGridReady={onGridReady}
              rowData={rowData}
            >
              <AgGridColumn
                field="athlete"
                filter="agTextColumnFilter"
                filterParams={{ buttons: ["reset", "apply"] }}
              />
              <AgGridColumn
                field="age"
                maxWidth={100}
                filter="agNumberColumnFilter"
                filterParams={{
                  buttons: ["apply", "reset"],
                  closeOnApply: true,
                }}
              />
              <AgGridColumn
                field="country"
                filter="agSetColumnFilter"
                filterParams={{ buttons: ["clear", "apply"] }}
              />
              <AgGridColumn
                field="year"
                filter="agSetColumnFilter"
                filterParams={{
                  buttons: ["apply", "cancel"],
                  closeOnApply: true,
                }}
                maxWidth={100}
              />
              <AgGridColumn field="sport" />
              <AgGridColumn field="gold" filter="agNumberColumnFilter" />
              <AgGridColumn field="silver" filter="agNumberColumnFilter" />
              <AgGridColumn field="bronze" filter="agNumberColumnFilter" />
              <AgGridColumn field="total" filter="agNumberColumnFilter" />
            </AgGridReact>
          </div>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>)
            (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendo's mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Princess Peach</b> (
            <i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is a
            character in Nintendo's Mario franchise. Originally created by
            Shigeru Miyamoto, Peach is the princess of the fictional Mushroom
            Kingdom, which is constantly under attack by Bowser. She often plays
            the damsel in distress role within the series and is the lead
            female. She is often portrayed as Mario's love interest and has
            appeared in Super Princess Peach, where she is the main playable
            character.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Princess_Peach"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default App
