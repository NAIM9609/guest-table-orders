import { Card } from 'primereact/card'
import React from 'react'
import { CardDetail } from './TabPanael'

function TabContentItem({ card }: Readonly<{ card: CardDetail }>) {
    return (
        <>
            <Card title="Advanced Card" subTitle="Card subtitle" footer={card.footer} header={card.header} className="h-full w-16rem">
                <p className="m-0 h-3rem white-space-nowrap overflow-hidden text-overflow-ellipsis	">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </>
    )
}

export default TabContentItem