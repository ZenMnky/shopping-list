function main(){
    $('#js-shopping-list-form').on('submit', (event) => {
        // prevent the from from submitting
        event.preventDefault();
        
        // assign the item to a variable and clear the input field
        let listItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');

        // add the item to the list, using a template and interpolation
        let template = `
        <li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`;
        $('ul.shopping-list').append(template);
        
        $(this).val('');
    })

    // Event listener on the shopping list allows for event handling on dynamically added elements
    $('.shopping-list').on('click', 'button', (event) => {
        
        let $targetButton = $(event.target).parent();
        let $targetButtonClass = $targetButton.attr('class');
        
        //when the 'check' button is clicked, add/remove the checked class to the shopping item name
        if ($targetButtonClass === 'shopping-item-toggle'){
            $targetButton
            .closest('.shopping-item-controls')
            .siblings('.shopping-item')
            .toggleClass('shopping-item__checked');
        }

        //when delete button is clicked, remove that list item node from the dom
        if ($targetButtonClass === 'shopping-item-delete'){
            $(event.target).parent().parent().parent().remove();
        }
        
    })

}

$(main);