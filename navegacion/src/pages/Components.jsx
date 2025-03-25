import React from "react";
import DescriptionList from "../components/DescriptionList";
import StackedLists from "../components/StackedLists";
import Dropdowns from "../components/Dropdowns";
import PageHeadings from "../components/PageHeadings";
import CategoryPreviews from "../components/CategoryPreviews";

const Components = () => {
    return (
      <>
        <DescriptionList />
        <StackedLists />
        <Dropdowns />
        <PageHeadings />
        <CategoryPreviews />

      </>
    );
};

export default Components;