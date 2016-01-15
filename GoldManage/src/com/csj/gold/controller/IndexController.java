package com.csj.gold.controller;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.csj.gold.model.GoldPrice;
import com.csj.gold.service.GoldPriceService;
import com.csj.gold.utils.page.Page;

@Controller
@RequestMapping("/")   
public class IndexController {
	
	
	
	@RequestMapping("/")
	public String index() {
		
		return null;
	}
}
