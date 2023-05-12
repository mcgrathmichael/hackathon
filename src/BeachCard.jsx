import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
// import SearchBar from "./components/SearchBar";
import Link from "@mui/material/Link";

export default function BeachCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div>
        <CardMedia
          sx={{ height: 240 }}
          key={title}
          image={image}
          title={title}
          description={description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link
            underline="hover"
            href={`https://www.google.com/search?q=${title}`}>
            Learn More
          </Link>
        </CardActions>
      </div>
    </Card>
  );
}
