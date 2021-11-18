export const headingVariant = {
    hide: { 
        x: '150px', 
        opacity: 0 
    },
    show: {
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.28
      }
    }
}

export const containerVariant = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  }
  
export const itemVariant = {
    hide: { opacity: 0 },
    show: { opacity: 1 }
}