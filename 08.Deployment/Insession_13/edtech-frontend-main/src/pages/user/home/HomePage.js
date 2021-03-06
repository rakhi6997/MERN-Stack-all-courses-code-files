import React, { useState, useEffect } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router";

// imports for routes
import { routeUtils } from "../../../routes";

// imports for utils
import * as constants from "../../../utils/constants";

// imports for components from Material UI library
import Typography from "@material-ui/core/Typography";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";
import { EnhancedSingleLineGridList } from "../../../components/MUI/MuiSingleLineGridList";
import { MuiCard } from "../../../components/MUI/MuiCard";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";

// imports for APIs
import * as coursesApi from "../../../api/coursesApi";

// imports for styles
import classes from "./HomePage.module.css";

const HomePage = () => {
  const history = useHistory();
  const { loader, isLoading, showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();

  const [newCoursesList, setNewCoursesList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const handleTitleSearch = (title) => {
   //Implement searchCourseByTitle API
  };

  const handleCategorySearch = (category) => {
    //Implement getCoursesByCategory API
  };

  const showCourseDetailsPage = (courseId) => {
    history.push(routeUtils.getDetailsPageRouteUrl(courseId)); // redirect to course details page on click of course card
  };

  useEffect(() => {
    //Implement getAllPublishedCourses API
    showLoader();

     coursesApi.getAllPublishedCourses(
       //success callback
       (response) => {
        setNewCoursesList(response.data);
        hideLoader();
       },
       //failure callback
       (error, errorMessage)=>{
        showNotification(errorMessage);
        hideLoader();
       }
     );

    //Implement getAllCategory API
    showLoader();

    coursesApi.getAllCategory(
      //success callback
      (response) => {
        setCategoryList(response.data);
        hideLoader();
      },

      //failure callback
      (error, errorMessage) => {
        showNotification(errorMessage);
        hideLoader();
      }
    );

  }, []);

  useEffect(() => {
     //Implement getAllCourses API

     showLoader();

     coursesApi.getAllCourses(
       //success callback
       (response) => {
        setCoursesList(response.data);
        hideLoader();
       },
       //failure callback
       (error, errorMessage)=>{
        showNotification(errorMessage);
        hideLoader();
       }
     );

  }, []);

  return (
    <div className={classes.homePage}>
      {/* Header */}
      <MuiPrimarySearchAppBar
        isSearchVisible={true}
        isCategoriesVisible={true}
        isProfileVisible={true}
        handleTitleSearch={handleTitleSearch}
        handleCategorySearch={handleCategorySearch}
        categoryList={categoryList}
      />
      {isLoading ? (
        <section className={classes.loaderContainer}>{loader}</section>
      ) : (
        <main className={classes.homePageContent}>
          {/* New Courses */}
          <section>
            <div className={classes.titleBar}>
              <h4>New Courses</h4>
            </div>
            {newCoursesList.length > 0 ? (
              <EnhancedSingleLineGridList
                data={newCoursesList}
                handleClick={(course) => showCourseDetailsPage(course._id)}
              />
            ) : (
              <Typography
                variant="inherit"
                component="h4"
                className={classes.noCourseFoundText}
              >
                No new course
              </Typography>
            )}
          </section>

          {/* Course Cards */}
          {coursesList.length > 0 ? (
            <section className={classes.courseCardsContainer}>
              {coursesList.map((course) => (
                <MuiCard
                  key={course._id}
                  data={course}
                  handleClick={() => showCourseDetailsPage(course._id)}
                />
              ))}
            </section>
          ) : (
            <Typography
              variant="inherit"
              component="h4"
              className={classes.noCourseFoundText}
            >
              No course found
            </Typography>
          )}
          {notification}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
