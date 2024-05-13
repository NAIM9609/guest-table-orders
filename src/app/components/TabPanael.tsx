import React, { Fragment } from 'react'
import { TabPanel } from 'primereact/tabview'
import ContainerScrollPanel from './ContainerScrollPanel';

export interface ITabPanel {
    id: string;
    header: string;
    icon: string;
    description: string;
    content?: CardDetail[];
}

export interface CardDetail {
    id: string;
    cardName: string;
    footer: string;
    header: string;
}

function TabPanael({ tabPanel }: Readonly<{ tabPanel: ITabPanel; }>) {
    return (
        <>
            <TabPanel header={tabPanel.header} leftIcon={"mr-2 pi " + tabPanel.icon}> {/*key={tabPanel.id + "_tabPanel"} */}

                <ContainerScrollPanel content={tabPanel.content} /> {/* key={tabPanel.header + "_scrollPanel"}  */}

            </TabPanel>
        </>
    )
}

export default TabPanael
