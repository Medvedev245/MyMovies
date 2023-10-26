import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route
          path="/movies"
          element={
            <div>
              компонент Movies, страница поиска фильмов по ключевому слову.
            </div>
          }
        ></Route>
        <Route
          path="/movies/:movieId"
          element={
            <div>
              компонент MovieDetails, страница с детальной информацией о
              кинофильме.
            </div>
          }
        ></Route>
        <Route
          path="/movies/:movieId/cast"
          element={
            <div>
              компонент Cast, информация о актерском составе. Рендерится на
              странице MovieDetails.
            </div>
          }
        ></Route>
        <Route
          path="/movies/:movieId/reviews"
          element={
            <div>
              компонент Reviews, информация об обзорах. Рендерится на странице
              MovieDetails.
            </div>
          }
        ></Route>
      </Routes>
      React homework template
    </div>
  );
};
