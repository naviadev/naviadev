
export const styles = {
  // Global Styles
  globalStyle :  `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden; 
  }
`,
  // Root Container
  root: {
    display: `grid`,
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '1vw',
    width: '100vw',
    minHeight: '100vh',
    height: 'auto',
    margin: '2vw auto',
    gridAutoRows: 'minmax(150px, auto)'
  }
  ,
  children: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      padding: '1vw',
    },

  mediaQueries: {
    mx600: {
      root: {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridAutoRows: '120px'
      },
      children: {
        minHeight: '120px',
      }
    },

    mn601mx900:{
      root: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(150px, auto)',
      },
      children: {
        minHeight: '150px',
      }
    },
  },
};

