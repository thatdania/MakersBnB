def add_all_rentals
  add_rental
  add_rental2
end

def add_rental
  visit('/rental/new')
  fill_in 'name',     with: 'The cottage'
  fill_in 'location', with: 'Cornwall'
  fill_in 'price',    with: 245
  fill_in 'capacity', with: 3
  fill_in 'user_name', with: 'Rob'
  click_on('submit')
end

def add_rental2
  visit('/rental/new')
  fill_in 'name',     with: 'Apartment 90120'
  fill_in 'location', with: 'New York'
  fill_in 'price',    with: 1005
  fill_in 'capacity', with: 1
  fill_in 'user_name', with: 'Lewis'
  click_on('submit')
end

def failed_signup
  visit '/'
  click_button('Sign Up')
  fill_in('name', with: 'Lewis101')
  fill_in('email', with: 'lewis@gmail.com')
  fill_in('password', with: 'airbnbwithfrogs12')
  fill_in('confirm_password', with: 'airbnbwithfrogs')
  click_button('Sign Up')
end

def lewis_signup
  visit '/'
  click_button('Sign Up')
  fill_in('name', with: 'Lewis101')
  fill_in('email', with: 'lewis@gmail.com')
  fill_in('password', with: 'airbnbwithfrogs12')
  fill_in('confirm_password', with: 'airbnbwithfrogs12')
  click_button('Sign Up')
end
