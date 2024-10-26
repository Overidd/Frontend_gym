import PropTypes from "prop-types"


export const CardSkeletonLocal = () => {
   return (
      <div className="h-[24rem] md:h-[25rem] md:max-w-[22rem] animate-pulse space-y-2 overflow-hidden">
         <div className="w-full h-[50%] rounded-xl bg-gray"></div>
         <div className="w-full h-[20%] rounded-xl bg-gray"></div>
         <div className="w-full h-[20%] rounded-xl bg-gray"></div>
      </div>
   )
}

// skeletonHeader Prop solo acepta un valor numerico pero se interpreta como un porcentaje
// quantityItem Prop solo acepta un valor numerico, es la cantidad de item
export const CardSkeleton = ({
   className,
   roundedClassName = 'rounded-xl',
   bgClassName = 'bg-gray',
   skeletonHeader = 0,
   quantityItem = 1
}) => {
   const heightHeader = 100 - parseInt(skeletonHeader)
   const height = heightHeader / parseInt(quantityItem)
   return (
      <div className={`min-w-full min-h-full animate-pulse overflow-hidden space-y-1 ${roundedClassName} ${className}`}>
         {
            skeletonHeader > 0 &&
            <div
               className={`w-full ${roundedClassName} ${bgClassName}`}
               style={{ height: `${100 - heightHeader}%` }}
            ></div>
         }
         {
            Array.from({ length: quantityItem }).map((_, index) => (
               <div
                  key={index}
                  className={`w-full ${roundedClassName} ${bgClassName}`}
                  style={{ height: `${height}%` }}
               ></div>
            ))
         }
      </div >
   )
}
CardSkeleton.propTypes = {
   className: PropTypes.string,
   roundedClassName: PropTypes.string,
   bgClassName: PropTypes.string,
   skeletonHeader: PropTypes.number,
   quantityItem: PropTypes.number,
}