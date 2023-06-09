export type Prediction = {
    execution_id: String,
    time_agg: String,
    Date: Date,
    gl_pg_rollup: String,
    gl_product_group_desc: String,
    gl_combined_desc: String,
    gl_product_group: String,
    cost_or_unit: String,
    pred_num: String,
    Customer_Returns: String,
    Historical_IDR: String,
    Average_Cost_per_Unit: String,
    Inbound_Inventory: String,
    PCI: String,
    Vendor_Returns: String,
    Raw_Trend_IDR: String,
    Neo_IDR: String,
    PCOGS: String,
    nwcogs_npc: String,
    Month_to_Day_Receipt_Unit_Ratio: String,
    IDR_Forecast_Clipped: String,
    Daily_Inbound_to_Customer_Return_Cost_Ratio: String,
    Receipts: String,
    Month_to_Day_Receipt_Cost_Ratio: String,
    IDR_ETS_Forecast: String,
    Network_COGS: String,
    IDR_Sarima_Forecast: String,
    Inventory_Forecast_No_Zero_Correction: String,
    Raw_Seasonal_IDR: String,
    Accounting_Adjustments: String,
    On_Hand_Inventory_Raw: String,
    in_warehouse_ratio: String,
    Raw_Outlier_Removed_IDR: String,
    IDR_Pre_Smoothed_Ratio: String,
    Raw_IDR_Forecast: String,
    On_Hand_Inventory_Forecast_w_o_initiatives_and_No_Zero_Correction: String,
    Shifted_NWCOGS_Forecast: String,
    Daily_Inbound_to_Receipt_Unit_Ratio: String,
    nw_ratio: String,
    Daily_Inbound_to_Vendor_Return_Unit_Ratio: String,
    Daily_Inbound_to_Customer_Return_Unit_Ratio: String,
    Daily_Inbound_to_Vendor_Return_Cost_Ratio: String,
    On_Hand_Inventory: String,
    Daily_Inbound_to_Receipt_Cost_Ratio: String,
    inventory_units_npc_with_accounting_adj: String,
    TILT_Initiative: String,
    BPA_Initiative: String,
    Long_lead_buys_Initiative: String,
    OIH_Initiative: String,
    VCPU_Buying_Impact_Initiative: String,
    Baseline_Initiative: String,
    PCI_Initiative: String,
    to__Turns_Improvement_Initiative: String,
    AIM_Defect_Reduction_Initiative: String,
    Supply_Constraints_Initiative: String,
    June__True_Up_Initiative: String,
    NEO_Initiative: String,
    Receipts_to_NWCOGS_Ratio: String,
    Initiatives_Impact: String,
    Edit_Initiative: String,
    On_Hand_Inventory_New: String,
    inventory_units_npc_with_accounting_adj_New: String,
    On_Hand_Inventory_Base_Forecast: String,
    On_Hand_Inventory_w_o_Acc_Adj: String,
    On_Hand_Inventory_w_o_Acc_Adj_Initiatives: String,
    Year: String,
    Month: String,
    month_num: String,
    Week: String,
    Quarter: String,
    pred_col: String,
    Oracle__Initiative: String,
    Oracle_Initiative: String,
    GL_Initiative: String,
    NARF_CA_Initiative: String,
    NARF_MX_Initiative: String,
    PCI_Initiative: String,
};
