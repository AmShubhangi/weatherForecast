import React from 'react';
import { Sparklines, SparklinesReferenceLine, SparklinesLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={1000} width={1000} data={props.data}>
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type='avg'></SparklinesReferenceLine>
            </Sparklines>
            <div>{average(props.data)}{props.units}</div>
        </div>
    );
}