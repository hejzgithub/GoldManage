package com.csj.gold.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
/**
 * Spring 的   Property读取器扩展
 * @author kelvin
 *
 */
public class CustomizedPropertyConfigurer  extends PropertyPlaceholderConfigurer{
	
    private static Map<String, Object> ctxPropertiesMap;  
    
   @Override  
   protected void processProperties(ConfigurableListableBeanFactory beanFactory,  
           Properties props)throws BeansException {  
 
       super.processProperties(beanFactory, props);  
       //load properties to ctxPropertiesMap  
       ctxPropertiesMap = new HashMap<String, Object>();  
       for (Object key : props.keySet()) {  
           String keyStr = key.toString();  
           String value = props.getProperty(keyStr);  
           ctxPropertiesMap.put(keyStr, value);  
       }  
   }  
 
   //static method for accessing context properties  
   public static Object getContextProperty(String name) {  
       return ctxPropertiesMap.get(name);  
   } 
}