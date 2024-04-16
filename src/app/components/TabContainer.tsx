import React, { Fragment } from 'react'
import { TabView } from 'primereact/tabview'
import TabPanael, { ITabPanel } from './TabPanael'

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

function displayTabPanels(tabPanels: ITabPanel[]) {

    return tabPanels.map((tPanel) => {
        return (<>
            <TabPanael tabPanel={tPanel} key={tPanel.id} />
        </>);
    });
}


const TabContainer = () => {

    const tabPanels: ITabPanel[] = [
        {
            id: '0',
            description: DESCRIPTION,
            header: 'Header I',
            icon: 'pi-user',
            content: [{
                cardName: 'Negroni',
                footer: '12 euro',
                header: 'Corretto',
                id: '123-123'
            }]
        },
        {
            id: '1',
            description: DESCRIPTION,
            header: 'Header II',
            icon: 'pi-calendar',
        },
        {
            id: '2',
            description: DESCRIPTION,
            header: 'Header III',
            icon: 'pi-cog',
        }
    ];

    return (<>
        <TabView>
            {displayTabPanels(tabPanels)}
        </TabView>
    </>)
}

export default TabContainer