package xyz.erupt.eruptlimit.base;

import xyz.erupt.eruptlimit.model.EruptUser;
import lombok.Data;

/**
 * Created by liyuepeng on 2018-12-14.
 */
@Data
public class LoginModel {

    private transient EruptUser eruptUser;

    private boolean useVerifyCode = false;

    private boolean pass;

    private String reason;

    private String token;

    private String userName;

    public LoginModel(boolean pass, EruptUser eruptUser) {
        this.pass = pass;
        this.eruptUser = eruptUser;
    }

    public LoginModel(boolean pass, String reason) {
        this.pass = pass;
        this.reason = reason;
    }

    public LoginModel(boolean pass, String reason, boolean useVerifyCode) {
        this.pass = pass;
        this.reason = reason;
        this.useVerifyCode = useVerifyCode;
    }
}