$(document).ready(function () {
    function createGrid(numCells) {
//        var cellDim = $('#container').width() / numCells;
        var cellDim = 960 / numCells;

        for (i = 0; i < numCells; i++) {
            $('#container').append('<div class="row">');

            for (j = 0; j < numCells; j++) {
                $('#container').append('<div class="cell">');
            }
        }

        $('.cell').css({'width': cellDim, 'height': cellDim});

        $('.cell').hover(function() {
            $(this).addClass('hover');
        });
    }

    $(createGrid(16));

    $('button').on('click', function () {
        $('.row').remove();
        $('.cell').remove();

        var newNumCells = prompt("Enter the number of cells for new grid");

        $(createGrid(newNumCells));
    }); 
});
