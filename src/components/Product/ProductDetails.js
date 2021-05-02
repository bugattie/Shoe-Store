import React from 'react'
import { useParams } from 'react-router'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Paper, Typography } from '@material-ui/core';

import '../../App.css';
import { Link } from 'react-router-dom';

export const ProductDetails = () => {
    const { productId } = useParams();

    const shoes = {
        "air-jordan-3-valor-blue": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
          name: "JORDAN MARS 270 LONDON",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-3-valor-blue1": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london1": {
          name: "JORDAN MARS 270 LONDON",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue1": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
      };

      const {name, img} = shoes[productId];

      if (!name && !img) return <h1>Product not found!</h1>

    return (
        <div>
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className="container1">
                <Paper variant="outlined" className="PaperHead1">
                  <Link to={`/products/${productId}`}>
                    <img src={img} alt={name} className="Product-img1"/>
                    <h2 className="Product-hd">{name}</h2>
                  </Link>
                </Paper>
            </Container>
            </React.Fragment>
        </div>
    )
}
