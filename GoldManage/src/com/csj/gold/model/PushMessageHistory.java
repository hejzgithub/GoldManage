package com.csj.gold.model;

import java.util.Date;

public class PushMessageHistory {
    private Long id;

    private String androidTitle;

    private String iosTitle;

    private String androidContant;

    private String iosContant;

    private Integer sendToAndroid;

    private Integer sendToIos;

    private Date sendTime;

    private Date createDate;

    private Long createUser;

    private Date updateDate;

    private Long updateUser;

    private Integer isDel;

    private Integer isForbidden;

    private Integer version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAndroidTitle() {
        return androidTitle;
    }

    public void setAndroidTitle(String androidTitle) {
        this.androidTitle = androidTitle;
    }

    public String getIosTitle() {
        return iosTitle;
    }

    public void setIosTitle(String iosTitle) {
        this.iosTitle = iosTitle;
    }

    public String getAndroidContant() {
        return androidContant;
    }

    public void setAndroidContant(String androidContant) {
        this.androidContant = androidContant;
    }

    public String getIosContant() {
        return iosContant;
    }

    public void setIosContant(String iosContant) {
        this.iosContant = iosContant;
    }

    public Integer getSendToAndroid() {
        return sendToAndroid;
    }

    public void setSendToAndroid(Integer sendToAndroid) {
        this.sendToAndroid = sendToAndroid;
    }

    public Integer getSendToIos() {
        return sendToIos;
    }

    public void setSendToIos(Integer sendToIos) {
        this.sendToIos = sendToIos;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Long getCreateUser() {
        return createUser;
    }

    public void setCreateUser(Long createUser) {
        this.createUser = createUser;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Long getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(Long updateUser) {
        this.updateUser = updateUser;
    }

    public Integer getIsDel() {
        return isDel;
    }

    public void setIsDel(Integer isDel) {
        this.isDel = isDel;
    }

    public Integer getIsForbidden() {
        return isForbidden;
    }

    public void setIsForbidden(Integer isForbidden) {
        this.isForbidden = isForbidden;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }
}