import React from "react";

export const Watchlist = () => {

    return (
        <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Account</th>
                    <th scope="col">This Month</th>
                    <th scope="col">YTD</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sales</td>
                    <td>1,198.32</td>
                    <td>1,198.32</td>
                </tr>
                <tr>
                    <td>Invenory</td>
                    <td>4,123.51</td>
                    <td>4,123.51</td>
                </tr>
                <tr>
                    <td>Advertising</td>
                    <td>4,186.32</td>
                    <td>4,186.32</td>
                </tr>
                <tr>
                    <td>Entertainment</td>
                    <td>0.00</td>
                    <td>0.00</td>                    
                </tr>
                <tr>
                    <td>Product</td>
                    <td>1,324.63</td>
                    <td>1,324.63</td>
                </tr>
            </tbody>
        </table>
    )
}