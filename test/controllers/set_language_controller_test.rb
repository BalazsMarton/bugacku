require 'test_helper'

class SetLanguageControllerTest < ActionController::TestCase
  test "should get hu" do
    get :hu
    assert_response :success
  end

  test "should get en" do
    get :en
    assert_response :success
  end

  test "should get de" do
    get :de
    assert_response :success
  end

  test "should get fr" do
    get :fr
    assert_response :success
  end

  test "should get ru" do
    get :ru
    assert_response :success
  end

  test "should get al" do
    get :al
    assert_response :success
  end

  test "should get il" do
    get :il
    assert_response :success
  end

end
