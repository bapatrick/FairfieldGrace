 <script src="../core/jquery.shapeshift.js"></script>

<script src="../core/vendor/jquery.touch-punch.min.js"></script>

 <script>
    $(document).ready(function() {
      $(".container").shapeshift({
        minColumns: 3
      });
    })
  </script>

   <script>
    $(document).ready(function() {
      $(".container2").shapeshift({
        minColumns: 3
      });
    })
  </script>


 <script>
    $(document).ready(function() {
      $(".container3").shapeshift({
        gutterX: -1, // Compensate for border width
        gutterY: -1, // Compensate for border width
        paddingX: 0,
        paddingY: 0
      });
    })
  </script>