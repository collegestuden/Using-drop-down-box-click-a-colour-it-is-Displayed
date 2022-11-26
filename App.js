import "./App.css";

const Soil2 = () => {
  const propsData = {
    listboxComponent: {
      placeholderText: {
        select: "--SELECT--",
      },
    
    },
  };
  return (
  <div className="pexels-aliona-pasha">
    <h1 className="drop">COLOUR CHANGER</h1>
    <div class="dropdowndemo">
    <button class="dropdownbtn">Colours</button>
    <div class="dropdownlist-content">
    <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sy_Y70frQzRnARGLw9huVUyP32aLlwlS1u7wdcb5&s">Red</a>
     <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiG5PYrG5G7MaxMfx8i8E_MX0BREiVgUh54KQ0Lt6&s">Yellow</a>
     <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkLKv_oSsmdvNaKplzRwZ-6Jr2m9MjIWBu3KiCrjE&s">Green</a>
     <a href= "https://img.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg?w=360">White</a>
     <a href= "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80">Black</a>
     <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5H02UeuwLF6vXDdp8VtQjSDXm_nJOsKfpUVE3wzk&s">Blue</a>
     <a href= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kMowSSwQV3elr50qVDUJ7y0A3Xrp6jHUumKOCy87&s">Pink</a>

    </div>
    </div>
  </div>     
  );
};
export default Soil2;