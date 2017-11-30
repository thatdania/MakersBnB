feature 'sign up' do
  scenario 'signing up takes you to the welcome page' do
    visit '/signup'
    lewis_signup
    click_button('Sign Up')
    expect(page).to have_current_path('/welcome')
    expect(page).to have_content('Welcome Lewis')
  end
end
