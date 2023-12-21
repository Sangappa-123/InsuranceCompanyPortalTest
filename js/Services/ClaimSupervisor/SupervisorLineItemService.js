﻿angular.module('MetronicApp').service('SupervisorLineItemDetailsService', ['$http', '$rootScope', 'AuthHeaderService', function ($http, $rootScope, AuthHeaderService) {

    //get item notes API #127
    this.getItemNotes = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/notes",//web/item/notes
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }
    this.getInvoiceList = function (param) {
        var getreceipt = $http({
            method: "POST",
            url: AuthHeaderService.getApiURL() + "web/item/invoice",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return getreceipt;
    }
    this.getInvoiceListByItem = function (param) {
        var getreceipt = $http({
            method: "GET",
            url: AuthHeaderService.getApiURL() + "web/item/invoicelist/" + param.itemId,
            headers: AuthHeaderService.getHeader()
        });
        return getreceipt;
    }
    //Add item notes with attachment API #20
    this.addItemNote = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/push/note",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return response;
    }
    //Get receipt list 276
    this.getReceiptList = function (param) {
        var getreceipt = $http({
            method: "POST",
            url: AuthHeaderService.getApiURL() + "web/item/mapped/receipt",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return getreceipt;
    }
    //Get category API #29
    this.getCategory = function () {
        var response = $http({
            method: "Get",
            url: AuthHeaderService.getApiURL() + "web/claim/get/category",
            //data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }

    //Add item notes API #30
    this.getSubCategory = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/subcategories",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }


    this.GetComparableListFromGoogle = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/claim/search/replacement",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }

    //API New #34
    this.deleteLineItem = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/remove/postlossitem",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }


    //get participant against line item - API #172    
    this.getVendorsListAgainstClaim = function (param) {
        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/claim/participants",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }

    //Get item single details on id #144
    this.gteItemDetails = function (param) {
        var details = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/claim/itemdetails",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return details;
    }
    //Get image of items on id
    this.gteItemImagess = function (param) {
        var details = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/images",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return details;
    }

    //Get compairables for item
    this.gteItemImagess = function (param) {
        var details = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/images",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return details;
    }

    //Save line item details
    this.SaveItemDetails = function (param) {
        var details = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/claim/update/postlossitem",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return details;
    }
    //Get replacement Suppliers (Google, Amazon)
    this.GetReplacementSupplier = function (param) {
        var list = $http({
            method: "Get",
            url: AuthHeaderService.getApiURL() + "web/claim/replacementsuppliers",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return list;
    }

    //Get Comparables form DB
    this.GetExistingComparablesFromDb = function (param) {
        var list = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/comparables",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return list;
    }

    //Save New comparables form Gooogle
    this.SaveNewComparables = function (param) {
        var list = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/save/item/comparables",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return list;
    }

    //Accept item accept button click
    this.AcceptItem = function (param) {
        var Accept = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/item/approve",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return Accept;
    }
    //Add note against claim with participant 
    this.addClaimNoteWithParticipant = function (param) {
        var Addnote = $http({
            method: "POST",
            url: AuthHeaderService.getApiURL() + "web/push/note",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return Addnote;
    }
    this.getPostLostItemsWithComparables = function (param) {

        var response = $http({
            method: "Post",
            url: AuthHeaderService.getApiURL() + "web/claim/line/items",
            data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }
    //API#625 Service to delete media file from insurance company schema
    this.deleteMediaFile = function (param) {
        var response = $http({
            method: "DELETE",
            url: AuthHeaderService.getApiURL() + "web/delete/attachment/" + param.id + "/purpose/" + param.purpose,
            //data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    };

    // get Rooms List
    this.getRooms = function (claimNumber) {
        var response = $http({
            method: "GET",
            url: AuthHeaderService.getApiURL() + "customer/claim/" + claimNumber + "/rooms",
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }

    // get Retailes List
    this.getRetailers = function (param) {
        var response = $http({
            method: "GET",
            url: AuthHeaderService.getApiURL() + "web/all/retailers",
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }

    this.saveAttachmentList = function (param) {
        var response = $http({
            method: "post",
            url: AuthHeaderService.getApiURL() + "web/add/item/attachments",
            data: param,
            headers: AuthHeaderService.getFileHeader()
        });
        return response;
    };

    //Get condition API
    this.getCondition = function () {
        var response = $http({
            method: "Get",
            url: AuthHeaderService.getApiURL() + "web/claim/get/condition",
            //data: param,
            headers: AuthHeaderService.getHeader()
        });
        return response;
    }
}]);