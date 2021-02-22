import { Input, LambdaResponse } from "./models";

export const handler = async (input: Input): Promise<LambdaResponse> => {
    console.log("input:", input)

    return { identifier: 'V12', softSearchSuccess: true }
};
