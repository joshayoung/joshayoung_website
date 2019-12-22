import PropTypes from "prop-types";
import React from "react";

const Quote = ({ siteTitle }) => (
  <div className='quote'>
    "Nōn nōbīs, Domine, nōn nōbīs, sed nōminī tuō dā glōriam."
  </div>
)

Quote.propTypes = {
  siteTitle: PropTypes.string,
}

Quote.defaultProps = {
  siteTitle: ``,
}

export default Quote;