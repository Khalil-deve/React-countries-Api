import './CountryContainerShimmer.css'
export default function CountryContainerShimmer(){
    const shimmerArray = Array.from({length: 12}).map((element,index)=>{
        return   <div key={index} className="country-card shimmer-card"></div>
    })
    return(
        <div className='countries-container'>
            {shimmerArray}
        </div>
    )
}