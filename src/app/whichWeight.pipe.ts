import { Pipe, PipeTransform } from '@angular/core';
import { Boxer } from './models/boxer.models';

@Pipe({
    name: "whichWeight",
    pure: false
})

export class WhichWeightPipe implements PipeTransform {
    transform(input: Boxer[], desiredWeight) {
        let output: Boxer[] = [];
        if (desiredWeight && desiredWeight !== "allWeights") {
            for (let i = 0; i < input.length; i++) {
                if (input[i].weightClass === desiredWeight) {
                    output.push(input[i]);
                }
            }
            return output;
        } else {
            return input;
        }
    }
}