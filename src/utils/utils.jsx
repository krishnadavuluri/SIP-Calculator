export default class Utils
{
    static GetSIPSummary(principal,years,rate)
    {
        const i=(rate/100)/12
        const n=years*12
        const x=(((1+i)**n)-1)/i
        const maturity=principal*x*(i+1)
        return {"maturity":parseInt(maturity),"investment":principal*n,"returns":parseInt(maturity)-(principal*n)}
    }
}