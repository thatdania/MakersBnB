feature 'welcome page', js: true do
  scenario 'user can see the rentals listed' do
    add_all_rentals
    visit '/welcome'
    expect(page.status_code).to equal(200)
    expect(page).to have_content('Cornwall', 'New York')
  end

  scenario 'user can see detal of chosen booking' do
    add_all_rentals
    visit '/welcome'

  end

  scenario 'user can click button to see indivdual rental' do
    add_all_rentals
    visit '/welcome'
    click_button('more-info1')
    expect(page).to have_current_path('/rental/overview')
    expect(page).to have_content('Cornwall', 245, 3)
  end

  scenario 'user can search by guest capacity' do
    add_all_rentals
    visit '/welcome'
    select "3", :from => "selectCapacity"
    expect(page).not_to have_content('New York')
    expect(page).to have_content('Cornwall')
  end

  scenario 'user can search by city' do
    add_all_rentals
    visit '/welcome'
    fill_in 'citySearch', with: 'New'
    expect(page).not_to have_content('Cornwall')
    expect(page).to have_content('New York')
  end
end
