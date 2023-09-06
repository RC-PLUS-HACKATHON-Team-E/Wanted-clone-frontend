import React, { useEffect } from "react";
import * as D from "./Styles";
import RecruitCard from "../../components/RecruitCard/RecruitCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecruits } from "../../store/actions/recruitAll";


function Recruit() {

  const dispatch = useDispatch();
  const recruits = useSelector((state) => state.recruitAll.recruits);

  useEffect(() => {
    dispatch(fetchRecruits());
  }, [dispatch]);

  useEffect(() => {
    console.log("받은 정보는:", recruits);
  }, [recruits]);


  {/*<DropDown/>*/}

  return (
    <D.RecruitContainer>
      <D.MainContainer>
        <D.ListContainer>
          <D.ListWrap>
            {recruits.map((recruit, index) => (
              <D.ListBox key={index}>
                <RecruitCard recruit={recruit} />
              </D.ListBox>
            ))}
          </D.ListWrap>
        </D.ListContainer>
      </D.MainContainer>
    </D.RecruitContainer>

  );
}


export default Recruit;
