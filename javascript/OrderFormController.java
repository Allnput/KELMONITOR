package com.example.orderform.controller;

import com.example.orderform.model.OrderForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class OrderFormController {

    @GetMapping("/")
    public String showForm(Model model) {
        model.addAttribute("orderForm", new OrderForm());
        return "orderform";
    }

    @PostMapping("/submit")
    public String submitForm(@ModelAttribute OrderForm orderForm, Model model) {
        model.addAttribute("orderForm", orderForm);
        return "orderform";
    }
}
