import classes from './MealsSummary.module.css'; 

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Prime-grade barbecue!</h2>
      <p>
        We prepare for you the best cuts of meat, seasoned and grilled to perfection 
        for an explosion of flavor with every bite. 
      </p>
      <p>
        All this in a sophisticated and cozy environment. 
        Come to Jerry Steakhouse now and discover what a truly mouth-watering experience is!
      </p>
    </section>
  );
}

export default MealsSummary;