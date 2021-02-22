import { Input, LambdaResponse } from "./models";

// eslint-disable-next-line @typescript-eslint/require-await
export const handler = async (input: Input): Promise<LambdaResponse> => {
    console.log("input:", input)

    return { identifier: 'hitachi', softSearchSuccess: false }
};
