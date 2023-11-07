import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { BiSolidCheckbox } from 'react-icons/bi';
import ReactECharts from 'echarts-for-react';
import { Watchlist } from './table';


const Dashboard = () => {

    const Linegragh = {
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            data: ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
        },
        yAxis: {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { show: false },
        },
        series: [
            {
                lineStyle: {
                    normal: {
                        color: 'green',
                        width: 3,
                    }
                },
                data: [9, 12, 15, 12, 10, 8, 11, 12, 11, 10, 9],
                type: 'line',
                showSymbol: false,
                smooth: true
            }
        ]
    }

    const option = {
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            data: ['Older', 'Jan 1-8', 'Jan 9-16', 'Jan 17-25', 'Jan 24-31', 'Future']
        },
        yAxis: {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { show: false }

        },
        series: [
            {
                itemStyle: { normal: { color: 'green', barBorderRadius: 5, } },
                data: [120, 200, 150, 80, 70, 110],
                type: 'bar',
                barWidth: '20%'
            }
        ]
    };

    const cashChart = {
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            data: ['August', 'September', 'October', 'November', 'December']
        },
        yAxis: {
            type: 'value',
            splitLine: { show: false },
            axisLabel: { show: false }

        },
        series: [
            {
                itemStyle: { normal: { color: 'green', barBorderRadius: 5, } },
                data: [120, 200, 150, 80, 70],
                type: 'bar',
                barWidth: '20%'
            },
            {
                type: 'bar',
                itemStyle: { normal: { color: 'lightskyblue', barBorderRadius: 5, } },
                data: [180, 280, 210, 120, 110],
                barWidth: '20%'
            }
        ]
    };


    return (
        <div className="">

            <div className="row m-2">
                <div className="col-lg-6">
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className='m-0'>Checking Accounts</h6>
                                <div className="CstmDrp">
                                    <div class="dropdown">
                                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Manage
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </div>
                                    <div class="dropdown">
                                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            January
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">January</a></li>
                                            <li><a class="dropdown-item" href="#">February</a></li>
                                            <li><a class="dropdown-item" href="#">March</a></li>
                                            <li><a class="dropdown-item" href="#">April</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <ReactECharts option={Linegragh} />

                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className='m-0'>Invoices owed to you</h6>
                                <div className="CstmDrp">
                                    <button className='primaryBtn'>New sales invoices</button>
                                </div>
                            </div>
                            <hr />
                            <ReactECharts option={option} />
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row m-2">
                <div className="col-lg-6">
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className='m-0'>Total cash flow</h6>
                                <div className="CstmDrp">
                                    <div className='inbox'>
                                        <BiSolidCheckbox />
                                        In
                                    </div>
                                    <div className='outbox'>
                                        <BiSolidCheckbox />
                                        Out
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <ReactECharts option={cashChart} />
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card>
                        <CardBody>
                            <h6 className='m-0'>Account watchlist</h6>
                            <hr />
                            <Watchlist />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;