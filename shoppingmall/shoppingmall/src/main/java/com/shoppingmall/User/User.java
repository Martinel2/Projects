package com.shoppingmall.User;

import com.shoppingmall.Day.Day;

public class User {
    final String id;
    private String pw;

    private String name;
    private String place;
    private Day birthday;

    public String getId() {
        return id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Day getBirthday() {
        return birthday;
    }

    public void setBirthday(Day birthday) {
        this.birthday = birthday;
    }

    User(String id, String pw, String name, String place, String d){
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.place = place;

        String[] sp = d.split(" ");
        this.birthday = new Day(sp);
    }
}
