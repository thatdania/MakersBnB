feature 'landing page' do
  scenario 'user receives welcome message' do
    visit '/'
    expect(page).to have_content('Welcome to MakersBnB')
  end
  scenario 'user can sign up' do
    visit '/'
    click_button('Sign Up')
    expect(page).to have_current_path('/signup')
    expect(page).to have_content('Enter your details to get started!')
  end
end
