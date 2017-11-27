def add_rental
  visit('/rental/new')
  fill_in 'name',     with: 'The cottage'
  fill_in 'location', with: 'Cornwall'
  fill_in 'price',    with: 245
  fill_in 'capacity', with: 3
  click_on('submit')
end
