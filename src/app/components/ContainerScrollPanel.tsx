import React from 'react'
import { ScrollPanel } from 'primereact/scrollpanel';
import TabContentItem from './TabContentItem';
import { CardDetail } from './TabPanael';


function ContainerScrollPanel({ content }: Readonly<{ content?: CardDetail[] }>) {


    return (
        <>
            {/* <ScrollPanel style={{ width: '100%', height: '70vh' }}>
                <div className='grid'>
                    {
                        !content ? 'No content' :
                            content.map((c) => {
                                return (<>
                                    <div key={c.id} className='col-3'>
                                        <TabContentItem card={c} />
                                    </div>
                                </>);
                            })
                    }
                </div>
            </ScrollPanel> */}
        </>
    )
}

export default ContainerScrollPanel