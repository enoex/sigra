var _ = require('lodash');
const DESCRIPTION_TEXT_REGEX = /\(\[([0-9%.]+)\](\[\[([a-zA-Z0-9%.*]+)\]\]\)?)/;
const DESCRIPTION_TEXT_REGEX_GLOBAL = /\(\[([0-9%.]+)\](\[\[([a-zA-Z0-9%.*]+)\]\]\))?/g;

function annotateDescription ( input ){
    let matched = input.match(DESCRIPTION_TEXT_REGEX_GLOBAL);
    let finalString = input;

    if(matched){
        _.each(matched, function(d){
            let curMatch = d.match(DESCRIPTION_TEXT_REGEX);
            if(!curMatch){ return; }

            let annotedItem = '<span class="description__tip-item">' +
                '<span class="description__tip-base" data-tip="Base value of ' + curMatch[1] + '">' + curMatch[1] + '</span>' +
            '' +
            (curMatch[3] ? '<span class="description__tip-critical" data-tip="Criticals are ' +
                curMatch[3].replace('x', '') + ' times more effective (total: ' +
                (+(curMatch[1].replace(/[^0-9]/, '')) * +(curMatch[3].replace(/[^0-9]/, ''))) +
                ')">(' + curMatch[3] + ')</span>' : '') +
            '</span>';


            finalString = finalString.replace(curMatch[0], annotedItem);
        });
    }

    return finalString;
}

export default annotateDescription;
